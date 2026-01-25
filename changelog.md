# Changelog

## 2026-01-25

主题系统迁移清单（Tailwind 仅消费变量）：
- `tokens.css`：仅保留基础色与尺度（品牌色/中性色/状态色/半径）
- `themes/*.css`：集中维护语义色，使用 `light-dark()` + `oklch()` + `color-mix()`
- `starwind.css`：只做变量映射，不做颜色计算
- 样式与组件：移除 RGB 三元组与 `rgba(var(--accent-rgb))` 写法
- 全局样式：统一使用语义变量（`--color-*`）输出颜色
