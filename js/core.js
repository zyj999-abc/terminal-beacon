// ========== 全局路由 + 密码 + 路由表 ==========
// 复用前先确认密码存在。所有密保 = 现实语义，不藏无关文字。
window.BEACON = {
  PAGES: {
    index:    "index.html",
    intro:    "intro.html",
    xp:       "xp.html",
    login:    "login.html",
    line:     "line.html",
    diary:    "diary.html",
    hospital: "hospital.html",
    forum:    "forum.html",
    qq:       "qq.html",
    evidence: "evidence.html",
    endTrue:  "end_true.html",
    endQuiet: "end_quiet.html"
  },
  // 密码集中存储 — 真实语义 + 密保对应
  PASSWORDS: {
    xpLogin:   "chenlan0301",  // 妈妈网名"晨岚" + 生日 1985-03-01
    lineAdmin: "0217",          // 2003 暴风雪停电日 = 2月17日
    hospitalYear: "2003",
    hospitalID:   "230402198503010028",  // 黑龙江鹤岗 + 1985-03-01 出生 + 00
    qqPass:   "baogao"          // 4 人组群里昵称"包高"(保护高贵 — 反讽)
  },
  HINTS: {
    xpLogin: "妈妈用过的网名（4 字拼音）+ 她的生日",
    hospitalYear: "出事的年份",
    hospitalID: "患者身份证号（前 6 位=籍贯+区号；中 8 位=生日）",
    lineAdmin: "2003 年那场暴风雪断电的具体日期（4 位数字）",
    qqPass: "四人小组的群昵称（拼音，2+2 = 4 个音节）"
  },
  go(page) {
    if (this.PAGES[page]) window.location.href = this.PAGES[page];
    else console.warn("Unknown page:", page);
  },
  goRaw(url) { window.location.href = url; }
};

// 通用 XP 窗口控制
function openXpWindow(id) {
  const w = document.getElementById(id);
  if (w) w.classList.add("show");
}
function closeXpWindow(id) {
  const w = document.getElementById(id);
  if (w) w.classList.remove("show");
}
// 暴露
window.openXpWindow = openXpWindow;
window.closeXpWindow = closeXpWindow;
