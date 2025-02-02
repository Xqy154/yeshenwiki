import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "目录",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "教程/",
        children: [
          { text: "新手教程", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "5",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "6",
          },
          "3",
          "4",
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
