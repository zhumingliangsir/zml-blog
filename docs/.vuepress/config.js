module.exports = {
  title: "Z.M.L-Man的后宫花园",
  // description: "纯属学习之用，如有侵权，请联系博主！",
  description: "敬畏代码，不忘初心，追求希望和灵感",
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/study.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      {
        text: "前端规范",
        items: [
          { text: "HTML", link: "/Web/Rules/HTML/" },
          { text: "CSS", link: "/Web/Rules/CSS/" },
          { text: "JAVASCRIPT", link: "/Web/Rules/JAVASCRIPT/" }
        ]
      },
      {
        text: "前端社区",
        items: [
          { text: "JavaScript", link: "/Web/Base/JavaScript/" },
          { text: "TypeScript", link: "/Web/Base/TypeScript/" },
          { text: "Performance", link: "/Web/Base/Performance/" },
          { text: "Scripts", link: "/Web/Base/Scripts/" },
        ]
      },
      {
        text: "前端框架",
        items: [
          { text: "Vue", link: "/Web/Frame/Vue/" },
          { text: "React", link: "/Web/Frame/React/" },
          { text: "React-native", link: "/Web/Frame/React-native/" },
          { text: "Webpack", link: "/Web/Frame/Webpack/" }
        ]
      },
      {
        text: "成神之路",
        items: [
          { text: "Git", link: "/Web/God/Git/" },
          { text: "Github", link: "/Web/God/Github/" },
          { text: "Linux", link: "/Web/God/Linux/" },
          { text: "Nginx", link: "/Web/God/Nginx/" },
          { text: "Node", link: "/Web/God/Node/" },
          { text: "Markdown", link: "/Web/God/Markdown/" }
        ]
      },
      { text: "设计模式", link: "/Model/" },
      { text: "了解更多", link: "/Other/" },
      { text: "关于博主", link: "/AboutMe/" }
    ],
    sidebar: {
      // 前端规范
      "/Web/Rules/": ["", "HTML", "CSS", "JAVASCRIPT"],
      // 前端社区
      "/Web/Base/JavaScript/": [
        "",
        "Traversing",
        "String-method",
        "Es6-module",
        "Es6-practical",
        "Vuepress",
        "Debounce-Throttle",
        "Browser-identification",
        "Other"
      ],
      "/Web/Base/TypeScript/": [
        "",
        "1-base",
        "3-interface",
        "4-class",
        "6.fanxing",
        "decorator",
        "Vue-typescript"
      ],
      "/Web/Base/Performance/": [""],
      "/Web/Base/Scripts/": ["", 'CreateNewPage'],
      // 前端框架
      "/Web/Frame/Vue/": [""],
      "/Web/Frame/React/": ["", "01-Environment-build", "Life-cycle", "react-expand", "react--ts-antd"],
      "/Web/Frame/React-native/": [
        "",
        "01-Environment-build",
        "02-Project-menu",
        "03-debugger",
        "04-build-android-apk",
        "Form-register",
        "Apk-build",
        "Customize-iconfont",
        "Android-inapp-update",
        "Vscode-plugin",
        "DrawerNavigator",
        "App-store-ios"
      ],
      "/Web/Frame/Webpack/": [""],

      // 成神之路
      "/Web/God/Github/": ["", "Upload"],
      "/Web/God/Linux/": ["", "Database-install", "Firewall", "Crontab", "Mac-os"],
      "/Web/God/Nginx/": [
        "",
        "01-Often-use",
        "02-Base-set",
        "03-Default-conf",
        "04-Nginx-conf"
      ],
      "/Web/God/Node/": ["", "Pm2"],
      // 设计模式
      "/Model/": ["", "0.UML", "2.oop", "1.principle", "3.factory", "4.builder", "5.sigle", "6.decorator", "7.combination", "8.watcher", "9.strategy", "10.chain", "11.delegate", "12.waiter", "13.MVC", "14.appearance", "15.prototype"],
      // 了解更多
      "/Other/": ["", "Cmd", "Rem", "Websocket", "SSD", "Usb", "Iframe", "Win10-open-cmd", "Hide-disk"],
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/icon"
      }
    }
  }
};
