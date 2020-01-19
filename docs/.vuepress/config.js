module.exports = {
  title: "Z.M.L-Man的后宫花园",
  description: "纯属学习之用，如有侵权，请联系博主！",
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
        text: "前端基础",
        items: [
          { text: "Html", link: "/" },
          { text: "Css", link: "/" },
          { text: "JavaScript", link: "/JavaScript/" },
          { text: "Http", link: "/Http/" }
        ]
      },
      {
        text: "前端框架",
        items: [
          { text: "Vue", link: "/Vue/" },
          { text: "React", link: "/React/" },
          { text: "React-native", link: "/React-native/" },
          { text: "Webpack", link: "/Webpack/" },
          { text: "Node", link: "/Node/" }
        ]
      },
      {
        text: "前端规范",
        items: [
          { text: "HTML", link: "/Web-Rules/HTML/" },
          { text: "CSS", link: "/Web-Rules/CSS/" },
          { text: "JAVASCRIPT", link: "/Web-Rules/JAVASCRIPT/" }
        ]
      },
      {
        text: "成神之路",
        items: [
          { text: "Git", link: "/Git/" },
          { text: "Hooks", link: "/Hook/" },
          { text: "Linux", link: "/Linux/" },
          { text: "Nginx", link: "/Nginx/" }
        ]
      },
      { text: "了解更多", link: "/Other/" },
      { text: "关于博主", link: "/Resume/" }
    ],
    sidebar: {
      "/JavaScript/": [
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
      "/Vue/": [""],
      "/React-native/": [
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
      "/React/": ["", "01-Environment-build", "Life-cycle", "react-expand", "react--ts-antd"],
      "/Webpack/": [""],
      "/Hook/": ["", "Custom-hook"],
      "/Linux/": ["", "Database-install", "Firewall", "Crontab", "Mac-os"],
      "/Nginx/": [
        "",
        "01-Often-use",
        "02-Base-set",
        "03-Default-conf",
        "04-Nginx-conf"
      ],
      "/Node/": ["", "Pm2"],
      "/Other/": ["", "Cmd", "Rem", "Websocket"],
      "/Http/": [""],
      "/Web-Rules/": ["", "HTML", "CSS", "JAVASCRIPT"]
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
