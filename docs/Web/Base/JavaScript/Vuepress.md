---
title: vuepress配置
---

## run

```js

git clone https://github.com/SummerJoan3/blog-doc.git

//进入项目
cd blog-doc

//安装
yarn global add vuepress  或 npm install -g vuepress

//本地运行
yarn docs:dev
```

## vuepress 目录

```js

- docs/

    - .vuepress/

        - dist/ 打包后的项目,放到服务器,nginx指向目录下index.html即可

        - public/ 配置需要的静态资源，比如icon

            study.ico 网站小icon

        - styles/ 主题颜色配置

            palette.styl

        config.js 最重要的配置文件,新增或者删除博客都要改动相应配置

    - ...博客md文件

    - test

        a.md

    README.md 首页


node_modules

package.json

```

## config.js 配置文件解读

```js
module.exports = {
  title: 'xjq的个人站点', //网站名称
  description: 'project documentation', //网站介绍
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/study.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    //头部header配置
    nav: [
      {
        text: 'Blog', //鼠标停放展开
        items: [
          { text: 'github', link: 'https://github.com/SummerJoan3' },
          { text: 'Javascript', link: '/Javascript/' },
          { text: 'React-native', link: '/React-native/' },
          { text: 'React', link: '/React/' },
          { text: 'Node', link: '/Node/' }
        ]
      },
      {
        text: 'Project',
        items: [{ text: 'Hxb', link: '/Hxb/' }]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Git', link: '/Git/' },
          { text: 'hooks', link: '/Hook/' },
          { text: 'Linux', link: '/Linux/' }
        ]
      },
      { text: 'AboutMe', link: '/AboutMe/' }
    ],
    sidebar: {
      //对应每个文件夹下面子文件,新增文件将name加入数组中
      '/Javascript/': ['', 'Traversing', 'String-method', 'Es6-module', 'Es6-practical', 'Vuepress'],
      '/React-native/': ['', 'Form-register', 'Apk-build', 'Customize-iconfont', 'Android-inapp-update', 'Vscode-plugin', 'DrawerNavigator'],
      '/React/': [''],
      '/Hook/': [''],
      '/Linux/': ['', 'Database-install', 'Firewall'],
      '/Node/': ['', 'Pm2']
    }
  }
}
```
