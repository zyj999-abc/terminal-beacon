# 终端信标 · Terminal Beacon

> 2011 年东北鹤岗。一台父亲留下的 2003 年旧 Windows XP 台式机，藏着母亲"已死 8 年"的真相。

<p align="center">
  <img src="screenshots/preview.png" alt="Terminal Beacon preview" width="900">
</p>

<p align="center">
  <a href="https://zyj999-abc.github.io/terminal-beacon/"><b>▶ 立即开始游戏（2-3 小时沉浸）</b></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/pages-live-2a7ad9?style=for-the-badge" alt="pages">
  <img src="https://img.shields.io/badge/version-2.0-c0392b?style=for-the-badge" alt="version">
  <img src="https://img.shields.io/badge/license-MIT-44aa44?style=for-the-badge" alt="license">
  <img src="https://img.shields.io/badge/no_dependency-0-44aa44?style=for-the-badge" alt="deps">
</p>

---

## 🎮 4 个道德结局

| 结局 | 路径 | 一句话 |
|---|---|---|
| **真相** | 整理证据 → 交省公安厅 | 3 人死刑缓期 · 爸爸包庇罪 2 年缓刑 · 妈妈 8 年后回家 |
| **散场** | 整理证据 → 交《新京报》 | 3 人出逃 · 爸爸无罪 · 妈妈有墓碑 · **4 号柜另 3 人去向成谜** |
| **逃避** | 整理证据 → 关机 | 爸爸 2011-10-11 在 4 号柜旁自杀 · 骨灰混入建筑垃圾 |
| **遗书** | (逃避后唯一可见) | 父亲 2003-2011 8 年沉默的全部真相 + 4 号柜位置 |

> **不是所有"陈岚"都这么幸运。** 玩完真结局再玩记者结局，你会看到那句台词真正的含义。

## 🖼️ 现场速览

<table>
  <tr>
    <td width="50%"><b>证据整理 (5 份)</b><br><img src="screenshots/screenshot-evidence.png" alt="evidence"></td>
    <td width="50%"><b>4 人组群聊</b><br><img src="screenshots/screenshot-groupchat.png" alt="groupchat"></td>
  </tr>
  <tr>
    <td width="50%"><b>爸爸的遗书</b><br><img src="screenshots/screenshot-letter.png" alt="letter"></td>
    <td width="50%"><b>记者结局"散场"</b><br><img src="screenshots/screenshot-ending.png" alt="ending"></td>
  </tr>
</table>

## 🔐 5 个真实语义密码

| 入口 | 密保 | 答案 |
|---|---|---|
| XP 登录 | 妈妈网名+生日 | `chenlan0301` |
| 医院病历 | 年+身份证 | `2003` + `230402198503010028` |
| 网通后台 | 暴风雪日 | `0217` |
| QQ 空间 | 4 人组群昵称 | `baogao` |
| 论坛搜索 | 关键词 | `太平间` / `冷柜` / `2003暴风雪` |

> ❌ **没有 Base64 / 没有 F12 必看**。所有谜题在页面文案中。

## 📂 6 个信息源

1. **XP 桌面** — 父亲 2003 年维护的旧电脑
2. **网通维护系统** — 2003 线路拓扑 + U-LINE-99 神秘专线
3. **妈妈日记扫描件** — 4 篇日记 + 撕页（含"4 号柜"）
4. **第七人民医院 2011 官网** — 2003 死亡证明
5. **北方论坛 2003 暴风雪帖** — 网友目击河北依维柯 + 4 塑料箱
6. **赵敏 QQ 空间 + 4 人组群聊** — 2003 年凌晨 2:48 关键 4 段对话

## 🎵 7 段原创 BGM / SFX

| 文件 | 时长 | 内容 |
|---|---|---|
| `audio/xp_start.wav` | 8s | 风扇启动 + 主板蜂鸣 + XP 启动 "叮咚" + 滚动条 |
| `audio/blizzard.wav` | 120s 循环 | 暴风雪 + 远处救护车 + 警笛 |
| `audio/morgue.wav` | 180s 循环 | 70 bpm 心跳 + 50Hz 冷柜嗡嗡 + 远方钟声 |
| `audio/dialup.wav` | 5s | 56K 调制解调器拨号 + 协商 |
| `audio/door.wav` | 2s | 太平间铁门 + 锁扣 + 隆隆 |
| `audio/scream.wav` | 3s | 女人尖叫 + 颤音 |
| `audio/power_off.wav` | 2s | 断电 + 电流消失 + 余音衰减 |

## 🎨 6 张关键图像

| 文件 | 含义 |
|---|---|
| `img/mom_2003.jpg` | 妈妈 2003 病前最后照片（暖黄、模糊） |
| `img/mom_young.jpg` | 妈妈更年轻（90 年代田野虚化） |
| `img/hospital_2003.jpg` | 第七医院 2003 旧院区（阴沉） |
| `img/hospital_2011.jpg` | 旧院区 2011 拆迁围挡 + 推土机 |
| `img/coldbox_4.jpg` | 4 号冷柜内部（绿光、阴森） |
| `img/group_dinner.jpg` | 4 人组 2003 聚餐剪影（火锅） |

## 🛠️ 技术栈

- **HTML 41 / CSS 3 / JS 1** = 45 文件
- **0 依赖**（无 React、无 Vue、无 jQuery、无 Node）
- **0 字体文件**（用系统 msyh.ttc）
- **7 段 WAV BGM**（自研 Python + numpy）
- **6 张 JPG 图像**（PIL 程序生成）

## 🚀 5 分钟本地运行

```bash
git clone https://github.com/zyj999-abc/terminal-beacon.git
cd terminal-beacon
python -m http.server 8000
# 打开 http://localhost:8000/
```

## 🧪 自动化测试

```bash
npm install
node test/walkthrough.mjs
# 输出 20+ 截图到 test/shots/
```

## 🎬 设计理念

> **不是反转为目的，是让玩家"成为反推"的人。**

- **真实语义密码** — 不藏无关文字，所有密保在剧情里能找到
- **多入口信息收敛** — 5 个信息源互相矛盾才能推真相
- **道德代价真实** — 没有"全部善终"，爸爸坐牢 2 年是真痛
- **时代沉浸** — 2006 XP 复刻 + 7 段 BGM + 6 张图像
- **细节伏笔** — 撕页 / 4 号柜 / U-LINE-99 / 7.4GB / 17 小时

## 📅 路线图 v3.0

- [ ] 多语言 (英文 / 简中 / 繁中) 切换
- [ ] BGM composer 模式（玩家可调每页背景音）
- [ ] 二周目彩蛋（隐藏冷柜地图 + 第 4 号柜场景）
- [ ] 移动端 UI 优化
- [ ] PWA 离线缓存

## ⭐ 给一颗星吧

如果这个游戏让你想起童年、想起家人、想起某个你没说出口的真相 ——
**点一下右上角的 ★ Star** 让更多人能找到它。

> 鹤岗老张说"最惨的是七医院老院区"，但他想说的是"最惨的是我们这些 2003 年在鹤岗活下来的人"。

## 📜 License

MIT — 你可以自由使用、二次创作、商用。

## 🤝 致谢

灵感来源：中国 80/90 后"暴风雪集体记忆" + 真实的人间悲剧。
同类项目推荐：[头七](https://www.66rpg.com/game/1632199)（橙光）、[Fishswimming](https://github.com/)（HTML 互动解谜）。

---

<p align="center">
  <b>Terminal Beacon · v2.0 · 2026</b><br>
  Made with ⚡ by Beacon · 鹤岗 · 阴
</p>
