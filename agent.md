# Astro

> Astro 是一个用于构建网站的一体化 Web 框架。

- Astro 使用岛屿架构和服务器优先的设计来减少客户端 JavaScript 开销，并交付高性能网站。
- Astro 友好的以内容为中心的功能（如内容集合和内置 Markdown 支持）使其成为博客、营销和电子商务网站等的绝佳选择。
- `.astro` 模板语法提供了强大的服务器渲染功能，其格式遵循 HTML 标准，对于使用过 JSX 的人来说会感到非常熟悉。
- Astro 通过官方集成支持流行的 UI 框架，如 React、Vue、Svelte、Preact 和 Solid。
- Astro 由 Vite 驱动，配备了快速的开发服务器，为您打包 JavaScript 和 CSS，让构建网站变得有趣。

## 文档集

- [精简文档](https://docs.astro.build/llms-small.txt)：Astro 文档的紧凑版本，移除了非必要内容
- [完整文档](https://docs.astro.build/llms-full.txt)：Astro 的完整文档
- [API 参考](https://docs.astro.build/_llms-txt/api-reference.txt)：Astro API 的简洁、结构化描述
- [操作指南](https://docs.astro.build/_llms-txt/how-to-recipes.txt)：向 Astro 项目添加功能的指导示例
- [构建博客教程](https://docs.astro.build/_llms-txt/build-a-blog-tutorial.txt)：使用 Astro 构建基础博客的分步指南
- [部署指南](https://docs.astro.build/_llms-txt/deployment-guides.txt)：如何将 Astro 网站部署到不同服务的指南
- [CMS 指南](https://docs.astro.build/_llms-txt/cms-guides.txt)：如何在 Astro 项目中使用不同内容管理系统的指南
- [后端服务](https://docs.astro.build/_llms-txt/backend-services.txt)：关于如何在 Astro 项目中集成 Firebase、Sentry 和 Supabase 等后端服务的建议
- [迁移指南](https://docs.astro.build/_llms-txt/migration-guides.txt)：关于如何将使用其他工具构建的项目迁移到 Astro 的建议
- [其他指南](https://docs.astro.build/_llms-txt/additional-guides.txt)：关于 Astro 项目中电子商务、身份验证、测试和数字资产管理的指南

## 说明

- 完整文档包含官方文档的所有内容
- 内容与官方文档从同一来源自动生成

## 可选

- [Astro 博客](https://astro.build/blog/)：关于 Astro 开发的最新消息

## 代码生成规范

### Tailwind CSS 语法要求

在生成代码时，**必须使用 Tailwind CSS 4 的语法**，不推荐使用 Tailwind CSS 3 的语法。

**主要语法差异：**

1. **渐变背景语法**：
   - ❌ Tailwind CSS 3: `bg-gradient-to-br`, `bg-gradient-to-r`, `bg-gradient-to-l` 等
   - ✅ Tailwind CSS 4: `bg-linear-to-br`, `bg-linear-to-r`, `bg-linear-to-l` 等

2. **样式组织**：
   - ✅ 使用 `@layer utilities` 包裹自定义样式和动画
   - ✅ 使用 `@import 'tailwindcss'` 导入 Tailwind CSS

3. **示例**：
   ```html
   <!-- ✅ 正确 - Tailwind CSS 4 -->
   <div class="bg-linear-to-br from-blue-500 to-purple-600">
   ```
   
   错误示例（不要使用）：
   - `bg-gradient-to-br` (Tailwind CSS 3 语法)
   - `bg-gradient-to-r` (Tailwind CSS 3 语法)
   - `bg-gradient-to-l` (Tailwind CSS 3 语法)

**注意事项：**
- 所有渐变相关的类名都需要使用 `bg-linear-to-*` 而不是 `bg-gradient-to-*`
- 自定义动画和样式应放在 `@layer utilities` 中
- 确保代码通过 Tailwind CSS 4 的 lint 检查

## 主题系统与设计令牌（:root 为唯一来源）

### 核心原则

- 设计令牌只存在于原生 `:root` CSS 变量中，作为唯一来源。
- Tailwind 仅消费语义变量，不定义颜色来源，方便未来替换 Tailwind。
- 颜色空间统一使用 `oklch()`；主题切换优先 `light-dark()`。
- 弱化边框/背景/状态色使用 `color-mix()` 或 `oklch(... / alpha)`。

### 现有结构（当前项目）

- 设计令牌：`src/styles/tokens.css`
- 主题变量：`src/styles/themes/light.css`、`src/styles/themes/dark.css`
- Tailwind 映射：`src/styles/starwind.css`（`@theme inline` 只做变量映射）

### 迁移清单（Tailwind 仅消费变量）

- `tokens.css` 仅保留基础色/尺度（品牌色、中性色、阴影等），不做语义判断。
- 主题语义变量集中到 `themes/*.css` 或单独 `theme.css`，使用 `light-dark()` 输出最终颜色。
- 所有语义颜色统一用 `--color-*` 命名，能直接被 CSS 或 Tailwind 使用。
- Tailwind 层只引用 `var(--color-*)`，不直接出现 `oklch()` 或 `color-mix()`。

### 变量命名建议

- 基础色令牌：`--brand-*`、`--neutral-*`
- 语义色令牌：`--color-text-*`、`--color-bg-*`、`--color-border-*`

### Tailwind 消费示例（仅消费语义变量）

在 `src/styles/starwind.css` 的 `@theme inline` 中仅映射变量：

```css
@theme inline {
  --color-background: var(--color-bg-primary);
  --color-foreground: var(--color-text-primary);
  --color-border: var(--color-border);
}
```

在组件中只使用 Tailwind 语义色，不直接写 `oklch()`：

```html
<div class="bg-background text-foreground border-border"></div>
```
