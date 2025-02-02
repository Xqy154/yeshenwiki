import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/",
  {
    text: "目录",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "功能详细",
        icon: "pen-to-square",
        prefix: "教程/",
        children: [
          { text: "新手教程", icon: "pen-to-square", link: "1" },
          { text: "饰品大全", icon: "pen-to-square", link: "2" },
          {
            text: "怪物图鉴",
            icon: "pen-to-square",
            link: "3",
          },
          {
            text: "装备大全",
            icon: "pen-to-square",
            link: "4",
          },
          {
            text: "城市概况",
            icon: "pen-to-square",
            link: "5",
          },
          {
            text: "道具大全",
            icon: "pen-to-square",
            link: "6",
          },
        ],
      },

      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },

    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
