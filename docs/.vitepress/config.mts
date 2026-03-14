import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "《抓到你了》",
  description: "Open Claw 结缘的程序员爱情故事",
  base: process.env.NODE_ENV === "production" ? "/claw-love/" : "/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "章节", link: "/chapters/chapter-01" },
    ],
    sidebar: [
      {
        text: "故事正文",
        items: [
          { text: "第一章：Bug 与初遇", link: "/chapters/chapter-01" },
          { text: "第二章：并肩开发", link: "/chapters/chapter-02" },
          { text: "第三章：误会与分岔", link: "/chapters/chapter-03" },
          { text: "第四章：版本与余生", link: "/chapters/chapter-04" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Huauauaa/claw-love" }],
  },
});
