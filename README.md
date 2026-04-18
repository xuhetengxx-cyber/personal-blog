# personal-blog

一个更偏品牌化展示的个人博客主页骨架，使用原生 HTML、CSS、JavaScript 搭建，并通过 GitHub Pages 自动部署。

## 当前包含

- Stripe 风格启发的高级首页视觉
- Hero、About、Selected Writing、Builds、Contact 等模块
- 响应式布局
- 纯静态实现，便于后续迁移到 Markdown / Astro / Next.js
- GitHub Pages 自动部署工作流

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问：`http://localhost:8000`

## 自动部署到 GitHub Pages

仓库已经包含：

- `.github/workflows/pages.yml`

你还需要在 GitHub 仓库设置里确认一次：

1. 进入 `Settings` → `Pages`
2. Source 选择 **GitHub Actions**
3. 之后每次推送到 `main`，都会自动部署

## 后续建议

1. 替换为你的真实姓名、简介、邮箱与社交链接
2. 增加文章详情页或 Markdown 渲染
3. 添加头像、项目卡片、时间线与归档页
4. 自定义域名 + SEO + Open Graph 图片
