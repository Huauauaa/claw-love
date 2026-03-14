# claw-love

使用 **VitePress** 重构的小说站点，内容位于 `docs/` 目录。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建预览

```bash
npm run docs:build
npm run docs:preview
```

## 项目结构

- `docs/index.md`：首页
- `docs/chapters/chapter-01.md` ~ `chapter-04.md`：章节页面
- `docs/.vitepress/config.mts`：VitePress 配置
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署

## GitHub Pages

工作流会在 `main` 分支 push 后自动构建并部署到 GitHub Pages。  
如果仓库名是 `claw-love`，站点基础路径为 `/claw-love/`（已在 VitePress 配置中设置）。
