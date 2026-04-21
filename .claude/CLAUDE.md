# v50

KFC 疯狂星期四文案数据仓库，提供 API 和 JSON 数据获取方式。

## 技术栈

- **运行时**：Node.js（CI）/ Bun（本地）/ Deno（API 服务）
- **包管理器**：Bun
- **语言**：TypeScript ESM（`package.json` 中 `type: "module"`）

## 项目结构

- `static/v50.json` — 文案数据，按长度排序的 JSON 数组
- `scripts/add.ts` — 添加文案脚本，支持 CLI 参数或 `COPY_TEXT` 环境变量
- `scripts/format.ts` — 格式化脚本，处理去重、盘古之白、KFC 规范化、排序
- `api/index.ts` — Deno API 服务（`/random`、`/list`）
- `.github/workflows/add_kfc_copy.yaml` — 自动化添加文案的 GitHub Actions
- `.github/ISSUE_TEMPLATE/add_kfc_copy.yaml` — 提交文案的 Issue 模板

## 常用命令

```sh
bun run add-copy "文案内容"  # 添加新文案
bun run format               # 格式化现有文案
bun run dev:api              # 启动 API 开发服务器（Deno）
```

## 自动化流程

1. 用户通过 Issue 模板提交文案（自动标记 `new-kfc-copy`）
2. 维护者审核后添加 `approved` label
3. GitHub Actions 自动提取文案、添加到数据、格式化、提交推送
4. 自动评论结果（成功/重复）并关闭 Issue

## 文案规范

- 符合「盘古之白」空格规范（使用 pangu 库）
- 专有名词统一写法（KFC）
- 去重（格式化前后各一次）
- 按长度升序排列
