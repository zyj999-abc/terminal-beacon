# 终端信标 / Terminal Beacon

2011 年东北鹤岗。一台父亲留下的 2003 年旧 Windows XP 台式机，藏着母亲"已死 8 年"的真相。

> 原创剧情 / XP 风格 / 单文件 HTML / 多页跳转 / 多入口信息收敛 / 双道德结局

## 玩法

1. 打开 `index.html`（建议 `python -m http.server` 起本地服务）
2. 跟随剧情在 8 年前的老系统中"维护线路"
3. 破解 5 个信息源密码（学校、医院、网线图、QQ 空间、本地论坛）
4. 在暑假最后一天做出选择：发送证据 / 关机逃避

## 目录

```
beacon/
├── index.html         # 入口 + 阅前声明
├── intro.html         # 2011 年 7 月 12 日 妈妈失踪第 8 天
├── xp.html            # Windows XP 模拟桌面
├── login.html         # 旧机器登录（密码 chenlan0301）
├── line.html          # 网通线路维护系统（2003 拓扑图）
├── diary.html         # 妈妈的旧日记扫描件
├── hospital.html      # 第七人民医院（2011 年新版）
├── forum.html         # 北方论坛 2003 暴风雪帖
├── qq.html            # 赵敏 QQ 空间
├── evidence.html      # 整理证据 + 决定发不发
├── end_true.html      # 真结局
├── end_quiet.html     # 坏结局
├── css/               # 样式
├── js/                # 路由 / 密码 / BGM
├── audio/             # BGM / SFX
├── img/               # 复刻 UI 用的占位图
└── doc/               # README / CHANGELOG
```

## 密码

| 入口 | 密保 | 答案 |
|---|---|---|
| login.html | 妈妈用过的网名（4 字拼音）| `chenlan0301` |
| hospital.html | 病历查询（年+身份证）| `2003` + `230402198503010028` |
| line.html | 网通后台管理员密码 | `0217` |
| forum.html | 论坛搜索关键词 | `太平间` 或 `冷柜` |
| qq.html | 赵敏 QQ 空间密码 | `baogao` |

## 自测

```bash
node test/walkthrough.mjs
```
