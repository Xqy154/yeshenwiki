import { defaultTheme } from '@vuepress/theme-default'

import theme from "./theme.js";

export default {
  theme: defaultTheme({
  base: "/yeshenwiki/",

  lang: "zh-CN",
  title: "凌云仙梦",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  }),
}


