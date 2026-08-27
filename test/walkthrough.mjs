// test/walkthrough.mjs
// 自动化走查两套结局，截图所有页面，捕获 console error / 404
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const __filename = new URL(import.meta.url).pathname.replace(/^\/(?=[A-Z]:\/)/, "");
const ROOT = path.dirname(__filename);
const PROJ = path.dirname(ROOT);
const SHOTS = path.join(PROJ, "test", "shots");
fs.mkdirSync(SHOTS, { recursive: true });

const PORT = 8765;
const BASE = `http://127.0.0.1:${PORT}`;

const PAGES = [
  "index.html", "intro.html", "xp.html", "login.html",
  "line.html", "diary.html", "hospital.html", "forum.html", "qq.html",
  "evidence.html", "end_true.html", "end_quiet.html"
];

const errors = [];
const failures = [];

function log(...a) { console.log("[WALK]", ...a); }

async function startServer() {
  // 简单的静态服务器
  const { default: http } = await import("http");
  const server = http.createServer((req, res) => {
    let url = req.url.split("?")[0];
    if (url === "/") url = "/index.html";
    const file = path.join(PROJ, url);
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404); res.end("404"); return;
    }
    const ext = path.extname(file).toLowerCase();
    const type = ext === ".html" ? "text/html" :
                 ext === ".js" ? "application/javascript" :
                 ext === ".css" ? "text/css" :
                 ext === ".md" ? "text/markdown" :
                 ext === ".json" ? "application/json" : "application/octet-stream";
    res.writeHead(200, { "Content-Type": type + "; charset=utf-8" });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((r) => server.listen(PORT, r));
  return server;
}

async function shot(page, name) {
  const p = path.join(SHOTS, name + ".png");
  await page.screenshot({ path: p, fullPage: false });
  log("screenshot ->", name);
}

async function main() {
  const server = await startServer();
  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  page.on("pageerror", e => {
    errors.push({ url: page.url(), err: e.message });
    log("PAGE_ERROR:", e.message);
  });
  page.on("requestfailed", req => {
    const url = req.url();
    // 忽略 favicon 404
    if (url.endsWith("/favicon.ico")) return;
    failures.push({ url, reason: req.failure()?.errorText });
    log("REQ_FAIL:", url, req.failure()?.errorText);
  });
  page.on("console", msg => {
    if (msg.type() === "error") {
      log("CONSOLE_ERR:", msg.text());
    }
  });

  log("===== 通用页面可达性测试 =====");
  for (const p of PAGES) {
    const url = `${BASE}/${p}`;
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    if (!resp || resp.status() >= 400) {
      failures.push({ url, reason: "HTTP " + (resp?.status() || "no-resp") });
      log("HTTP_FAIL:", url, resp?.status());
    } else {
      log("OK:", p, resp.status());
    }
    // 等动画稳定
    await new Promise(r => setTimeout(r, 800));
    await shot(page, "p_" + p.replace(".html",""));
  }

  log("===== 真结局走查 =====");
  await page.goto(`${BASE}/index.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 2000));
  // 点 "我已悉知"
  await page.click("#start-btn");
  await new Promise(r => setTimeout(r, 2500)); // 等序章 + fade
  await page.goto(`${BASE}/xp.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 1000));
  await shot(page, "route_xp");
  // 进 login
  await page.goto(`${BASE}/login.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 500));
  await page.type("#pw", "chenlan0301");
  await Promise.all([
    page.click("button[type=submit]"),
    new Promise(r => setTimeout(r, 1500))
  ]);
  // 进入 line
  await page.goto(`${BASE}/line.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 800));
  await shot(page, "route_line");
  // 点神秘专线
  await page.evaluate(() => {
    const nodes = document.querySelectorAll(".node");
    for (const n of nodes) if (n.textContent.includes("U-LINE-99")) { n.click(); break; }
  });
  await new Promise(r => setTimeout(r, 800));
  // 输密码
  await page.type("#gatePw", "0217");
  await new Promise(r => setTimeout(r, 300));
  const okAfter = await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll("button")).find(b => b.textContent.trim() === "确认" && b.closest("#gate"));
    if (btn) { btn.click(); return true; }
    return false;
  });
  log("clicked 确认 =", okAfter);
  await new Promise(r => setTimeout(r, 2500));
  log("after 0217 url =", page.url());
  await shot(page, "route_after_line");
  // 走 evidence
  await page.goto(`${BASE}/evidence.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 800));
  await shot(page, "route_evidence");
  // 点发送
  await page.click(".btn-send");
  await new Promise(r => setTimeout(r, 500));
  await shot(page, "route_confirm");
  // 用 evaluate 找 confirmSend 里的"我确定"按钮
  const okConfirm = await page.evaluate(() => {
    const div = document.getElementById("confirmSend");
    if (!div) return false;
    const btn = Array.from(div.querySelectorAll("button")).find(b => b.textContent.includes("我确定"));
    if (btn) { btn.click(); return true; }
    return false;
  });
  log("clicked 我确定 =", okConfirm);
  await new Promise(r => setTimeout(r, 18000)); // 等真结局动画
  await shot(page, "route_end_true_full");

  log("===== 坏结局走查 =====");
  await page.goto(`${BASE}/index.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 1500));
  await page.click("#start-btn");
  await new Promise(r => setTimeout(r, 2500));
  // 跳过 xp / login / line，直接到 evidence
  await page.goto(`${BASE}/evidence.html`, { waitUntil: "domcontentloaded" });
  await new Promise(r => setTimeout(r, 800));
  await page.click(".btn-quit");
  await new Promise(r => setTimeout(r, 500));
  await page.evaluate(() => {
    const div = document.getElementById("confirmQuit");
    const btn = Array.from(div.querySelectorAll("button")).find(b => b.textContent.includes("我确定"));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 14000)); // 等坏结局 12s
  await shot(page, "route_end_quiet_full");

  log("===== 报告 =====");
  log("errors:", errors.length);
  log("failures:", failures.length);
  for (const f of failures) log(" -", f);
  fs.writeFileSync(path.join(SHOTS, "report.json"), JSON.stringify({ errors, failures }, null, 2));

  await browser.close();
  server.close();
  process.exit(errors.length === 0 && failures.filter(f => !f.reason?.includes("favicon")).length === 0 ? 0 : 1);
}

main().catch(e => { console.error("FATAL", e); process.exit(2); });
