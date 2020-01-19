---
title: 开发环境
---

## 安装 Node.js

::: tip 别看了，赶紧安装吧

- 1、Node 中文地址：[http://nodejs.cn/](http://nodejs.cn/)
- 2、需要你注意的是，一定要根据电脑系统正确下载对应版本
- 3、Node.js 安装好以后，打开终端（或者叫命令行工具）。
- 4、输入代码：

```js
node - v;
```

- 5、如果正确出现版本号，说明 Node 安装成功了，然后再输入代码:

```js
npm - v;
```

- 5、如果正确出现版本号，说明 npm 也是没问题的，这时候我们的 Node.js 安装就算完成了
  :::

## 安装脚手架

::: warning 终端输入

npm install -g create-react-app

安装成功后，就可以开始肆无忌惮的搭建 react 项目了
:::

## 创建工程

::: tip

- 1、`mkdir ReactDemo`(创建 ReactDemo 文件夹)
- 2、`create-react-app demo01`(创建一个名为 demo01 的项目，可根据需要更改)
- 3、`cd demo01`(等创建完成后，进入项目目录)
- 4、`npm start`(预览项目，如果能正常打开，说明项目创建成功)
  :::

## 项目目录介绍

#### 项目根目录文件

::: tip

- 1、`README.md :` -这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用 Markdown 的语法来编写。
- 2、`package.json`: 这个文件是 webpack 配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对 webpack 了解，对这个一定也很熟悉。

- 3、`package-lock.json`：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到 git，以保证其他人再 npm install 时大家的依赖能保证一致。

- 4、`gitignore` : 这个是 git 的选择性上传的配置文件，比如一会要介绍的 node_modules 文件夹，就需要配置不上传。

- 5、`node_modules` :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。

- 6、`public` ：公共文件，里边有公用模板和图标等一些东西。

- 7、`src` ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握
  :::

#### public 文件夹介绍

::: tip

- 1、`index.js :` -这个就是项目的入口文件

- 2、`index.css`: 这个是 index.js 里的 CSS 文件

- 3、`app.js`：这个文件相当于一个方法模块，也是一个简单的模块化编程

- 4、`serviceWorker.js`：这个是用于写移动端开发的，PWA 必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能
  :::

  #### src 文件夹介绍

::: tip

- 1、`favicon.ico :` -这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示

- 2、`index.html`: 首页的模板文件

- 3、`mainifest.json`：移动端配置文件
  :::

### 实现 hello world

```js
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello JSPang</div>;
  }
}
export default App;
```

::: tip 温馨提示，下面两种方法完全等价

```js
 import React, { Component } from 'react'等价于。
```

```js
import React from "react";

const Component = React.Component;
```

:::