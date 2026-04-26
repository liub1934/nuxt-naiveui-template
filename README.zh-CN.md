# Nuxt Naive UI Template

[English](./README.md)

一个基于 Naive UI + Nuxt 4 + TypeScript + UnoCSS 的开箱即用模板。

## 特性

- 🎨 Naive UI 组件库集成，支持自定义主题色（通过 Cookie 持久化，兼容 SSR）
- 🌗 暗黑模式切换，跟随系统 / 手动切换
- 🎯 UnoCSS 原子化 CSS，预设 Wind4，内置主题色 CSS 变量与常用 shortcuts
- 📏 ESLint 基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config)，集成 UnoCSS、Prettier 格式化
- 🔌 Naive UI Discrete API 全局挂载（`window.$message` / `$dialog` / `$notification` / `$loadingBar`）

## Nuxt Modules

| 模块 | 说明 |
| --- | --- |
| [@nuxt/eslint](https://eslint.nuxt.com) | ESLint 集成，与 Nuxt 深度整合 |
| [@nuxt/icon](https://nuxt.com/modules/icon) | 图标方案，支持 Iconify 全量图标集 |
| [@unocss/nuxt](https://unocss.dev/integrations/nuxt) | UnoCSS 原子化 CSS 引擎 |
| [@bg-dev/nuxt-naiveui](https://github.com/becem-gharbi/nuxt-naiveui) | Naive UI Nuxt 集成，支持 SSR、色彩模式 |

## UnoCSS 主题色

项目通过 CSS 变量将 Naive UI 的主题色桥接到 UnoCSS，支持 `primary`、`info`、`success`、`warning`、`error` 五种颜色，每种颜色提供 1-10 共 10 个色阶（基于 Ant Design 色板生成，暗黑模式自动适配）。

可在任意 UnoCSS 工具类中使用：

```html
<!-- 文字颜色 -->
<span class="text-primary">主色</span>
<span class="text-primary-3">主色浅</span>
<span class="text-primary-8">主色深</span>
<span class="text-error">错误色</span>

<!-- 背景颜色 -->
<div class="bg-success">成功背景</div>
<div class="bg-warning-2">警告浅色背景</div>

<!-- 边框颜色 -->
<div class="border border-info">信息色边框</div>

<!-- 同样适用于 ring、outline、divide 等 -->
<div class="ring-2 ring-primary">...</div>
```

支持的颜色名：

| 基础色 | 色阶 |
| --- | --- |
| `primary` | `primary-1` ~ `primary-10` |
| `info` | `info-1` ~ `info-10` |
| `success` | `success-1` ~ `success-10` |
| `warning` | `warning-1` ~ `warning-10` |
| `error` | `error-1` ~ `error-10` |

不带色阶的颜色名（如 `primary`、`info`）等价于色阶 5，即 Naive UI 的默认主色。

## 开始使用

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 本地预览生产构建
pnpm preview
```
