---
title: Webpack3.0
---

## 第 01 节：认识 WebPack 的作用

如果您已经在前端行业中，WebPack 在业界的流行程度自然必备多说，成为了前端小白升级为前端工程师的必备技能。如果你对 webpack 还不够熟悉，那你在前端前进的脚步会受到阻碍，但是你幸运的搜索到了这篇文章。（但是文章可能不会讲解如何从 1.0、2.0 版本升级 3.0 版本的知识，而是直接讲解 3.0 的知识，所以你可能需要有一个空杯心态来学习）

在学习过程中，我希望你能每节看完文章后，都可以自己亲手做一做，如果你不作就不会出现错误，不出现错误，你就没办法增长经验，那你就什么都学不会。相信我，慢慢来，比较快。

**前端为什么需要 WebPack？**

现在的前端网页功能丰富，特别是 SPA（single page web application 单页应用）技术流行后，JavaScript 的复杂度增加和需要一大堆依赖包，还需要解决 SCSS，Less……新增样式的扩展写法的编译工作。所以现代化的前端已经完全依赖于 WebPack 的辅助了。

现在最流行的三个前端框架，可以说和 webpack 已经紧密相连，框架官方都推出了和自身框架依赖的 webpack 构建工具。

- React.js+WebPack
- Vue.js+WebPack
- AngluarJS+WebPack

从此可以看出，无论你前端走那条线，你都要有很强的 Webpack 知识，才能祝你成为这个框架领域的大牛。

**什么是 WebPack？**

WebPack 可以看做是模块打包机：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript 等），并将其转换和打包为合适的格式供浏览器使用。在 3.0 出现后，Webpack 还肩负起了优化项目的责任。

这段话有三个重点：

- 打包：可以把多个 Javascript 文件打包成一个文件，减少服务器压力和下载带宽。
- 转换：把拓展语言转换成为普通的 JavaScript，让浏览器顺利运行。
- 优化：前端变的越来越复杂后，性能也会遇到问题，而 WebPack 也开始肩负起了优化和提升性能的责任。

我们可以从下图再次了解一下 WebPack 的作用:

**安装 WebPack**

看了这么久，一定着急动手作一作了。要使用 WebPack 就要先进行安装，就和你要使用微信，必须在手机上下载微信的 APP 一样，但是不同的是 WebPack 的安装，采用的是命令行 npm 形式的安装。

这里我以 windows 系统为例，给大家做截图示范。苹果安装稍有不同，不过大同小异（如果有问题，可以直接进群交流，进群方法看文章开头）。

**具体安装方法：**

用 win+R 打开运行对话框，输入 cmd 进入命令行模式。然后找到你想开始项目的地方，输入下方代码：

mkdir webpack_democd webpack_demo

第一句是建立一个文件夹，第二句是进入这个文件夹。这个文件夹就是我们的项目文件目录了，文件夹建立好后，可以通过下面命令安装 WebPack。

需要注意的是,你在执行下一步时必须安装 node，可以通过 node -v 来查看 node 安装情况和版本，如果没有安装，要先安装 node 才可以继续进行。

//全局安装 npm install -g webpack

如果你这时安装失败了（出现了报错信息），一般有三种可能：

- 检查你 node 的版本号，如果版本号过低，升级为最新版本。
- 网络问题，可以考虑使用 cnpm 来安装（这个是淘宝实时更新的镜像）,具体可以登录 cnpm 的官方网站学习[http://npm.taobao.org/。](http://npm.taobao.org/。)
- 权限问题，在 Liux、Mac 安装是需要权限，如果你是 Windows 系统，主要要使用以管理员方式安装。

**注意：**全局安装是可以的，但是 webpack 官方是不推荐的。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

**对项目目录进行安装**

全局安装完成后，我们还要进行一个项目目录的安装。在用 npm 安装前，我们先要进行一下初始化，初始化的主要目的是生成 package.json 文件（这是一个标准的 npm 说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等，如果你对此文件还不了解，可以看看 node 的相关知识）。

在命令行输入：

npm n init

输入完成后，npm 终端会问你关于项目的名称，描述……一堆内容，如果你不考虑发布到 npm 上，这些内容都不重要，而且我们后期还可以用文本的形式修改这些内容。现在我们只要一路回车就完成了初始化。这时用 dir 命令已经可以看到生成的 package.json 文件了。

输入下面命令进行项目目录的安装：

npm install --save-dev webpack

这里的参数–save 是要保存到 package.json 中，dev 是在开发时使用这个包，而生产环境中不使用。

开发环境 and 生产环境：

- 开发环境：在开发时需要的环境，这里指在开发时需要依赖的包。
- 生产环境：程序开发完成，开始运行后的环境，这里指要使项目运行，所需要的依赖包。

**查看 webpack 版本**

你安装好后，会想知道你现在 webpack 版本，在工作中交流时，也会经常问到你，你的打包版本是什么？这时候我们可以用下面的命令进行查看。

webpackw  -v

可以看到我现在的版本的 3.6.0 版本，这是目前（2017/9/16）最新的版本了。出现了版本号，也说明你的 webpack 安装成功了。

看到这里，我们第一节的内容就完成了，我建议你停一下，把 webpack 安装到你的电脑上，再进行向下观看，如果在安装时遇到什么问题，可以在下方的留言区给我留言。

## 第 02 节：让你快速上手一个 Demo

上节课已经安装好了 Webpack 到电脑上，这节课就开始一个简单的 Demo，让你快速上手和熟悉 Webpack 的基本用法，学习并作完这节课内容你就可以和朋友小吹一下说：我也会 Webpack。

**建立基本项目结构**

首先进入上节课我们建立的 webpack_demo 目录（每个人建立的位置不同，可能建立在了 D 盘或者 E 盘）。进入后在根目录建立两个文件夹，分别是 src 文件夹和 dist 文件夹：

- src 文件夹：用来存放我们编写的 javascript 代码，可以简单的理解为用 JavaScript 编写的模块。
- dist 文件夹：用来存放供浏览器读取的文件，这个是 webpack 打包成的文件。

你可以理解成 src 是源码文件，dist 是我们编译打包好的文件；一个用于开发环境，一个用于生产环境。

**编写程序文件：**

文件夹建立好后，我们在 dist 文件下手动建立一个 index.html 文件，并写入下面的代码。

/dist/index.html

<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="X-UA-Compatible" content="ie=edge">    <title>jspang webpack</title></head><body>    <div id="title"></div>    <script src="./bundle.js"></script></body></html>

这里引入了一个 JavaScript 的 bundle.js 文件。这个文件现在还没有，这是用 webpack 执行打包命令后生产的文件。我们的 index.html 写好后，接下来在 src 文件夹下建立 entery.js 的文件，用于编写我们的 JavaScript 代码，也是我们的入口文件。

src/entery.js

document.getElementById('title').innerHTML='Hello Webpack';

这个文件的代码很简单，就是在

标签里写入 Hello Webpack 这句话。

**第一次 Webpack 打包**

Webpack 其实是可以在终端（命令行）中使用的，基本使用方法如下：

webpack {entry file} {destination for bundled file}

- {entery file}:入口文件的路径，本文中就是 src/entery.js 的路径；
- {destination for bundled file}:填写打包后存放的路径。
- 注意：在命令行中是不需要写{ }的。

执行的结果如下图：

命令执行成功后，会在 dist 目录下出现 bundle.js 文件，这时我们就可以在浏览器中预览结果了，网页中显示出了 Hello Webpack 的信息。

**总结：**

从这个 Demo 中你会了解到 webpack 的基本用法和使用过程，并会了命令行打包的方法。在这节文章的最后，我还是要强调，你一定要把本节内容在自己的电脑上敲一遍，这样你才能深入了解。

## 第 03 节：配置文件：入口和出口

**首先要说明的是：学习这节课前，务必作完上节课的代码，否则你会学的一脸懵逼。**

上节课通过一个小 Demo 我们对 Webpack 有了初步了解，但是上节课的终端打包方案，在实际开发中并不使用，而是使用 Webpack 的配置文件的方式进行设置。这节课我们就学一下配置文件的大体结构和入口出口文件的配置。

**配置文件 webpack.config.js**

webpack.config.js 就是 Webpack 的配置文件，这个文件需要自己在项目根目录下手动建立。建立好后我们对其进行配置，先看下面的代码（webpack.config.js 的基本结构），这是一个没有内容的标准 webpack 配置模版。

webpack.config.js

module.exports={    //入口文件的配置项     entry:{},    //出口文件的配置项     output:{},    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

- entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
- output：配置出口文件的地址，在 webpack2.X 版本后，支持多出口配置。
- module：配置模块，主要是解析 CSS 和图片转换压缩等功能。
- plugins：配置插件，根据你的需要配置不同功能的插件。
- devServer：配置开发服务功能，后期我们会详细讲解。

entry 选项（入口配置）

这个选项就是配置我们要压缩的文件一般是 JavaScript 文件（当然也可以是 CSS…..）。按照上节课的代码(如果你上节课的代码还没作，那你可以返回去重新作一下)，这里要填写的是 src 目录下的 entery.js 文件。

wepback.config.js 中的 entry 选项

//入口文件的配置项 entry:{    //里面的 entery 是可以随便写的     entry:'./src/entry.js'},

**output 选项（出口配置）**

出口配置是用来告诉 webpack 最后打包文件的地址和文件名称的。按照上节课的操作，应该打包到 dist 目录下。在编写出口文件时，我们需要用到一点 Node 的知识，如果你还不会 Node 也没有 关系，就简单的两句代码，你记住就可以了（在视频中我还有详细的讲解）。

//出口文件的配置项 output:{    //打包的路径文职     path:path.resolve(\_\_dirname,'dist'),    //打包的文件名称     filename:'bundle.js' },

如果你只这样写，是会报错的：找不到 path 这个东西。所以我们要在 webpack.config.js 的头部引入 path，代码如下：

const  path  =  \`require\`('path');

这里我们使用了 const，这是 ES6 的语法，如果你对 ES6 还不熟悉，也可以看技术胖 ES6 的课程哦（[http://old.jspag.com/2017/06/03/es6/）。](http://old.jspag.com/2017/06/03/es6/）。)

其实 path.resolve(\_\_dirname,’dist’)就是获取了项目的绝对路径。如果你还是不理解，我会在视频中给你进行演示。

filename:是打包后的文件名称，这里我们起名为 bundle.js。

现在 webpack.config.js 的代码：

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'bundle.js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

这个代码写完后，可以在终端中直接输入 webpack 就会进行打包。

在实际开发中我们都是通过配置文件进行打包的，所以必须要掌握好。

**多入口、多出口配置**

Webpack 在版本 1 的时候很难设置多出口文件，但是在 2 版本开始就变的很方便了。直接看多入口和多出口的文件配置，然后可以和单一出口对比一下，你会发现这种设置非常简单（只需改动两点配置就可以）。

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js',        //这里我们又引入了一个入口文件         entry2:'./src/entry2.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

可以看到代码的第 7 和 14 行进行了增加和修改，在入口文件配置中，增加了一个 entry2.js 的入口文件（这个文件你需要自己手动建立），这时候要打包的就有了两个入口文件。在代码 14 行我们把原来的 bundle.js 修改成了\[name\].js。

\[name\]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。

**总结：**

这节课的内容是需要仔细消化的，不求你记住，但是要练习，因为你无论配置任何项目的 Webpack 都要作这些操作。你可以把本文当作一个字典，在需要的时候进行查询。

## 第 04 节：配置文件： 服务和热更新

作为一个前端工程师，最大的编程需求之一就是所见即所得的工具，也就是常说的热更新。现在一般有点规模的公司都为前端工程师准备了双屏显示器，其目的就是一个屏幕编写代码，一个屏幕实时显示页面效果。这节课就学习用 webpack3.6 版本实现热更新效果。

从这节课开始视频需要购买才可以观看。教程一共 30 集左右，学完后完全可以达到独立构建中大型项目水平，从此 webpack 不在是你职业发展的瓶颈了。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**设置 webpack-dev-server**

要执行 webpack-dev-server 是要先用 npm install webpack-dev-server –save-dev 来进行下载的。下载好后，需要配置一下 devServer。最简单的 devServer 配置项只有四个。先看一下代码，然后我再作解释。

/webpack.config.js

devServer:{        //设置基本目录结构         contentBase:path.resolve(\_\_dirname,'dist'),        //服务器的 IP 地址，可以使用 IP 也可以使用 localhost        host:'localhost',        //服务端压缩是否开启         compress:true,        //配置服务端口号         port:1717    }

- contentBase:配置服务器基本运行路径，用于找到程序打包地址。
- host：服务运行地址，建议使用本机 IP，这里为了讲解方便，所以用 localhost。
- compress：服务器端压缩选型，一般设置为开启，如果你对服务器压缩感兴趣，可以自行学习。
- port：服务运行端口，建议不使用 80，很容易被占用，这里使用了 1717.

**注意：**这里需要使用 npm 来进行安装 webpack-dev-server 了， 命令如下：

npm install webpack-dev-server --save-dev

这是本地安装，所以使用了–save-dev。

配置好后，你可以试着在终端中输入 webpack-dev-server,如果可以执行成功，但是往往提示下面的错误（或者是无法找到内部或外部命令）。

出现下面的错误不用慌张，我们只要在 package.json 里配置一下 scripts 选项就可以执行了。

/package.json

"scripts": {    "server":"webpack-dev-server" },

配置好保存后，在终端里输入 npm run server 打开服务器。然后在浏览器地址栏输入[http://localhost:1717 就可以看到结果了。](http://localhost:1717就可以看到结果了。)

**支持热更新**

在 npm run server 启动后，它是有一种监控机制的（也叫 watch）。它可以监控到我们修改源码，并立即在浏览器里给我们更新。

注意：这里只是我们的 webpack3.6 版本支持，在 3.5 版本时要支持热更新还需要一些其他的操作。因为已经有了成熟的 3.6 版本，我就不再介绍低版本的操作方法。还有一种情况。如果你都设置好了，但是不进行热更新，可能是你系统的问题，在 Linux 和 Ma 上支持良好，在 Windows 上有时会出现问题。

如果你在操作时，在 Windows 上出现问题了，请在文章下方给我留言。

## 第 05 节：模块：CSS 文件打包

Webpack 在生产环境中有一个重要的作用就是减少 http 的请求数，就是把多个文件打包到一个 js 里，这样请求数就可以减少好多。这节课我们就学习一个重要的知识，把我们的 CSS 文件打包。在学习 CSS 打包之前，需要先对 webpack.config.js 里的 Loaders 配置项进行了解。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**Loaders**

Loaders 是 Webpack 最重要的功能之一，他也是 Webpack 如此盛行的原因。通过使用不同的 Loader，Webpack 可以的脚本和工具，从而对不同的文件格式进行特定处理。

简单的举几个 Loaders 使用例子：

- 可以把 SASS 文件的写法转换成 CSS，而不在使用其他转换工具。
- 可以把 ES6 或者 ES7 的代码，转换成大多浏览器兼容的 JS 代码。
- 可以把 React 中的 JSX 转换成 JavaScript 代码。

注意：所有的 Loaders 都需要在 npm 中单独进行安装，并在 webpack.config.js 里进行配置。下面我们对 Loaders 的配置型简单梳理一下。

- test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
- use：loader 名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
- include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- query：为 loaders 提供额外的设置选项（可选）。

明白了 Loader 是什么后，就开始这节课的正题，如何打包 CSS 文件。

**打包 CSS 文件：**

建立 index.css 文件

要打包 CSS 你必须先要有个 CSS 文件，在/src 目录下，我们建立一个 css 文件夹，在文件夹里建立 index.css 文件。代码内容如下。

./src/css/index.css

body{    background-color: red;    color: white;}

CSS 文件建立好后，需要引入到入口文件中，才可以打包到，这里我们引入到 entry.js 中。

/src/entery.js 中在首行加入代码：

import i css from './css/index.css';

CSS 和引入做好后，我们就需要使用 loader 来解析 CSS 文件了，这里我们需要两个解析用的 loader，分别是 style-loader 和 css-loader。

**style-loader:**

它是用来处理 css 文件中的 url()等，npm 中的网址：https://www.npmjs.com/package/style-loader

用 npm install 进行项目安装：

npm install style-loader --save-dev

**css-loader：**

它是用来将 css 插入到页面的 style 标签。npm 中的网址：[https://www.npmjs.com/package/css-loader](https://www.npmjs.com/package/css-loader)

用 npm install 进行项目安装：

npm n install --save-dev css-loader

两个 loader 都下载安装好后，我们就可以配置我们 loaders 了。

**loaders 配置：**

修改 webpack.config.js 中 module 属性中的配置代码如下：

webpack.config.js

module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            }          \]    },

这个文件的详细讲解，我们在上面已经提及，如果你还是无法理解可以观看视频。

**总结：**

敲黑板，这节课的内容非常重要，上面的配置过程最好作两遍以上，完全了解后，再进行下节课的学习。loader 的使用也决定着你 webpack 水平的高低。所以一定要重视和练习。

## 第 06 节：插件配置：配置 JS 压缩

通过五节课的学习，我相信小伙伴已经对 Webpack 有所入门。这节课让我们初步了解插件（plugins\[ \]）的用法。在学习新知识之前，我先回答一个小伙伴提的问题，他的问题就是：“我看到别人写的 CSS 打包配置文件和你写的不一样，是不是有其他的写法？”

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**loader 的三种写法：**

上节课学习了如何把 CSS 文件进行打包到 JS 当中去，有小伙伴就提问，我看到别人的 CSS 打包的写法和你的写法不太一样，是不是他们写错了，loader 还有几种写法，这里我们就看两种另外的写法。

**第一种写法：直接用 use。**

module:{        rules:\[            {                test:/\\.css\$/,                use:\['style-loader','css-loader'\]            }        \]    },

**第二种写法：把 use 换成 loader。**

module:{        rules:\[            {                test:/\\.css\$/,                loader:\['style-loader','css-loader'\]            }        \]    },

**第三种写法：用 use+loader 的写法：**

module:{        rules:\[            {                test:/\\.css\$/,                use: \[                    {                        loader: "style-loader"                    }, {                        loader: "css-loader"                    }                \]            }        \]    },

由此看出，webpack 的扩展和灵活性是非常强的，你习惯于那种写法都可以。最重要的是，你看见别人项目的其他写法也不要慌张，自己去试一试，有可能就可以 Get 到新知识。

**压缩 JS 代码：**

现在你写的 JS 代码，在上线之前，都是需要进行压缩的，在没有 webpack 和 gulp 这些工具前，你可能需要找一个压缩软件或者在线进行压缩，在 Webpack 中可以很轻松的实现 JS 代码的压缩，它是通过插件的方式实现的，这里我们就先来引入一个 uglifyjs-webpack-plugin(JS 压缩插件，简称 uglify)。

**注意：**虽然 uglifyjs 是插件，但是 webpack 版本里默认已经集成，不需要再次安装。

**引入：**

我们需要在 webpack.config.js 中引入 uglifyjs-webpack-glugin 插件

const uglify = \`require\`('uglifyjs-webpack-plugin');

引入后在 plugins 配置里 new 一个 uglify 对象就可以了，代码如下。

plugins:\[        new uglify()    \],

这时候在终端中使用 webpack 进行打包，你会发现 JS 代码已经被压缩了。如果你用的 VSCode 的话，可以按 Alt+Z 让他文件自动换行，查看效果。

贴出通过 6 节课学习，现在 webpack.config.js 文件中的所有代码，这样大家可以对照学习。

const path=\`require\`('path');const uglify = \`require\`('uglifyjs-webpack-plugin');module.exports={    entry:{        entry:'./src/entry.js',        entry2:'./src/entry2.js'    },    output:{        path:path.resolve(\_\_dirname,'dist'),        filename:'\[name\].js'    },    module:{        rules:\[            {                test:/\\.css\$/,                use: \["style-loader", "css-loader"\]            }        \]    },    plugins:\[        new uglify()    \],    devServer:{       contentBase:path.resolve(\_\_dirname,'dist'),       host:'192.168.0.104',       compress:true,       port:1717    }}

## 第 07 节：插件配置：HTML 文件的发布

有经验的小伙伴其实一眼就可以看出，现在我们的项目结构是有问题的，我们把 index.html 直接放到了 dist 文件夹下，这肯定是不正确的，应该放到我们 src 目录下。但是前期我们为了循序渐进的学习，所以把 index.html 放到了 dist 目录下。这节课我们就学习如何把 html 文件打包到我们的生产路径下。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**devServer 和 JS 压缩的冲突**

上节课学习了 JS 压缩，在视频中我使用了 webpack 进行打包，而没有使用 npm run server 进行预览，也就是说没有启用 devServer 里的配置。那有些小伙伴在学习完视频后，在终端中输入了 npm run server 进行了预览，发现终端中报错了。

要弄明白这个问题，我们先要弄清楚什么是开发环境，什么是生产环境。开发环境中是基本不会对 js 进行压缩的，在开发预览时我们需要明确的报错行数和错误信息，所以完全没有必要压缩 JavasScript 代码。而生产环境中才会压缩 JS 代码，用于加快程序的工作效率。devServer 用于开发环境，而压缩 JS 用于生产环境，在开发环境中作生产环境的事情所以 Webpack 设置了冲突报错。

在实际开发中，webpack 配置文件是分开的，开发环境一个文件，生产环境一个文件。所以在讲课之前我并没有发现这个问题，感谢小伙伴提出的问题。如果你在学习过程中有任何疑问，欢迎在文章下方留言。

**打包 HTML 文件**

我们先把 dist 中的 html 文件剪切到 src 目录中，并去掉我们的 JS 引入代码（webpack 会自动为我们引入 JS），因为这才是我们真实工作的目录文件结构。

然后我们配置 webpack.config.js 文件，先引入我们的 html-webpack-plugin 插件。

const htmlPlugin= \`require\`('html-webpack-plugin');

引入后使用 npm 进行安装包。

npm install --save-dev html-webpack-plugin

最后在 webpack.config.js 里的 plugins 里进行插件配置，配置代码如下。

new htmlPlugin({            minify:{                removeAttributeQuotes:true            },            hash:true,            template:'./src/index.html'         })

- minify：是对 html 文件进行压缩，removeAttrubuteQuotes 是却掉属性的双引号。
- hash：为了开发中 js 有缓存效果，所以加入 hash，这样可以有效避免缓存 JS。
- template：是要打包的 html 模版路径和文件名称。

上边的都配置完成后，我们就可以在终端中使用 webpack，进行打包。你会看到 index.html 文件已经被打包到我们的 dist 目录下了，并且自动为我们引入了路口的 JS 文件。

**总结：**

html 文件的打包可以有效的区分开发目录和生产目录，在 webpack 的配置中也要搞清楚哪些配置用于生产环境，哪些配置用于开发环境，避免两种环境的配置冲突。

## 第 08 节：图片迈坑：CSS 中的图片处理

在学习 Webapck 过程中你可能遇到的第一个坑就是 CSS 中的图片处理。很多 webpack 新手都在图片的坑中无法自拔（有的小伙伴在开发环境中是可以找到图片的，但是一打包后就找不到图片了，有的小伙伴是不知道如何正确引入 html 或者 css 中的图片，导致程序出错），我们将用三节课时间搞彻底走出 webpack 图片的坑。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**图片写入 CSS**

你可以先在网上找一个图片，我这里就自恋的使用了我的头像，如果你需要下载，也可以下载（当然你可以完全自己找一个自己喜欢的）。

找到图片后在 src 目录下新建一个 images 文件夹，把图片放入 images 文件夹。

在 index.html 文件中增加一个放置 div 的标签（需要注意的是这里修改的是 src 下的 index.html 文件，不是 dist 下的，这点新手很容易弄混，要格外注意），代码如下。

<div id="tupian"></div>

编写 css 文件，把你用的图片作为背景显示。

#tupian{   background-image: url(../images/manhua.png);   width:466px;   height:453px;}

编写完成后，我们可以试着用 webpack 去打包一下。你会发现终端中是报错的，具体错误可以看下图。

**file-loader、url-loader**

上面的错误是由于缺少 loader 的解析，对 loader 其实我们并不陌生，因为前边已经学习了 CSS 打包的 loader。我们先安装两个解析图片用的 loader。

安装 file-loader 和 url-loader

npm install --save-dev file-loader url-loader

安装好后我们需要对两个 loader 进行基本的了解，学习尽量做到知其然知其所以然。

**file-loader：**解决引用路径的问题，拿 background 样式用 url 引入背景图来说，我们都知道，webpack 最终会将各个模块打包成一个文件，因此我们样式中的 url 路径是相对入口 html 页面的，而不是相对于原始 css 文件所在的路径的。这就会导致图片引入失败。这个问题是用 file-loader 解决的，file-loader 可以解析项目中的 url 引入（不仅限于 css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

**url-loader：**如果图片较多，会发很多 http 请求，会降低页面性能。这个问题可以通过 url-loader 解决。url-loader 会将引入的图片编码，生成 dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此 url-loader 提供了一个 limit 参数，小于 limit 字节的文件会被转为 DataURl，大于 limit 的还会使用 file-loader 进行 copy。

配置 url-loader

我们安装好后，就可以使用这个 loader 了，记得在 loader 使用时不需要用 require 引入，在 plugins 才需要使用 require 引入。

webpack.config.js 文件

//模块：例如解读 CSS,图片如何转换，压缩     module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

- test:/.(png|jpg|gif)/是匹配图片文件后缀名称。
- use：是指定使用的 loader 和 loader 的配置参数。
- limit：是把小于 500000B 的文件打成 Base64 的格式，写入 JS。

写好后就可以使用 webpack 进行打包了，这回你会发现打包很顺利的完成了。具体的 Base64 的格式，你可以查看视频中的样子。

**为什么只使用了 url-loader**

有的小伙伴会发现我们并没有在 webpack.config.js 中使用 file-loader，但是依然打包成功了。我们需要了解 file-loader 和 url-loader 的关系。url-loader 和 file-loader 是什么关系呢？简答地说，url-loader 封装了 file-loader。url-loader 不依赖于 file-loader，即使用 url-loader 时，只需要安装 url-loader 即可，不需要安装 file-loader，因为 url-loader 内置了 file-loader。通过上面的介绍，我们可以看到，url-loader 工作分两种情况：

1.文件大小小于 limit 参数，url-loader 将会把文件转为 DataURL（Base64 格式）；

2.文件大小大于 limit，url-loader 会调用 file-loader 进行处理，参数也会直接传给 file-loader。

也就是说，其实我们只安装一个 url-loader 就可以了。但是为了以后的操作方便，我们这里就顺便安装上 file-loader。

## 第 09 节：图片迈坑：CSS 分离与图片路径处理

通过上节课的学习已经能把小图片打包成 Base64 格式，也对 webpack 对图片的打包有个基本了解。这节课主要学习两个知识：第一个是把 CSS 从 JavasScript 代码中分离出来，第二个是如何处理分离出来后 CSS 中的图片路径不对问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**CSS 分离:extract-text-webpack-plugin**

有些简单的交互页面中，你的 JavasScript 页面代码会非常少，而大部分代码都在 CSS 中，这时候项目组长会要求把 CSS 单独提取出来，方便以后更改。遇到这个需求你不要惊慌，已经有大神为我们准备好了对象的插件（plugin）。

extract-text-webpack-plugin

这个插件就可以完美的解决我们提取 CSS 的需求，但是 webpack 官方其实并不建议这样作，他们认为 CSS 就应该打包到 JavasScript 当中以减少 http 的请求数。但现实中的需求往往不是我们前端能控制的，有些需求是我们不能控制的，分离 CSS 就是这样一个既合理由不合理的需求。

**安装：**录制课程时的版本是 3.0.0 版本，直接使用 npm install 就可以安装。

npm install --save-dev extract-text-webpack-plugin

**引入：**安装完成后，需要先用 require 引入。

const extractTextPlugin = \`require\`("extract-text-webpack-plugin");

**设置 Plugins：**引入成功后需要在 plugins 属性中进行配置。这里只要 new 一下这个对象就可以了。

new extractTextPlugin("/css/index.css")

这里的/css/index.css 是分离后的路径位置。这部配置完成后，包装代码：还要修改原来我们的 style-loader 和 css-loader。

修改代码如下。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

作完上边这四部后，就可以使用 webpack 进行打包了。

**图片路径问题：**

利用 extract-text-webpack-plugin 插件很轻松的就把 CSS 文件分离了出来，但是 CSS 路径并不正确，很多小伙伴就在这里搞个几天还是没有头绪，网上也给出了很多的解决方案，我觉的最好的解决方案是使用 publicPath 解决，我也一直在用。

publicPath：是在 webpack.config.js 文件的 output 选项中，主要作用就是处理静态文件路径的。

在处理前，我们在 webpack.config.js 上方声明一个对象，叫 website。

var website ={    publicPath:"http://192.168.1.108:1717/"}

注意，这里的 IP 和端口，是你本机的 ip 或者是你 devServer 配置的 IP 和端口。

然后在 output 选项中引用这个对象的 publicPath 属性。

//出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js',        publicPath:website.publicPath    },

配置完成后，你再使用 webpack 命令进行打包，你会发现原来的相对路径改为了绝对路径，这样来讲速度更快。

**总结：**这节课我们实现了 CSS 的分离，并在分离后处理了图片路径不对的问题。处理路径的方法一定要充分理解，因为这在工作中经常用到。

## 第 10 节：图片迈坑：处理 HTML 中的图片

在 webpack 中是不喜欢你使用标签来引入图片的，但是我们作前端的人特别热衷于这种写法，国人也为此开发了一个：html-withimg-loader。他可以很好的处理我们在 html 中引入图片的问题。因为是国人开发的，文档都是中文，所以学习起来还是比较简单的。所以在学习新课之前我们先解决两个小伙伴的问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

只有项目安装 webpack，如何打包？ 有的小伙伴在学习视频时，并没有全局安装 webpack，而是使用了项目安装。首先我要说的是，这种做法是 webpack 推崇的，webpack 并不鼓励全局安装 webpack。但是小伙伴看我视频中直接在终端用 webpack 进行打包项目，他使用时会出现不是内部命令或者外部命令。

这时候需要配置 package.json 里的 scripts 选项，我们以前的课程已经学习了配置 webpack-dev-server 命令，在这个命令下面我们再加一个 build 命令进行打包项目使用。

"scripts": {    "server": "webpack-dev-server --open",    "build":"webpack"  },

配置完成后，可以在控制台输入 npm run build 进行打包。

**如何把图片放到指定的文件夹下**

前边两节课程，打包后的图片并没有放到 images 文件夹下，要放到 images 文件夹下，其实只需要配置我们的 url-loader 选项就可以了。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:5000,                       outputPath:'images/',                   }               }\]            }          \]    },

这回你再执行打包就可以把图片打包到 images 文件夹里了。

**html-withimg-loader**

html-withimg-loader 就是我们今天的重点了，这个插件并不是很火，也是我个人喜欢的一个小 loader。解决的问题就是在 hmtl 文件中引入标签的问题。

安装：

npm install html-withimg-loader --save

**配置 loader**

webpack.config.js

{    test: /\\.(htm|html)\$/i,     use:\[ 'html-withimg-loader'\] }

然后在终端中可以进行打包了。你会发现 images 被很好的打包了。并且路径也完全正确。

总结：我们通过三节课的时间讲了 webpack 图片中的坑，这些坑在我初学 webpack 初期给我带来了不少的麻烦，我也算是倾囊相教了，希望小伙伴们有所收获。在你工作中遇到图片的问题，也可以返回文章里进行对比查找问题。

## 第 11 节：CSS 进阶：Less 文件的打包和分离

第 05 节中已经讲过 CSS 文件的打包，后来又讲了 CSS 分离。这节我们讲解一下 Less 文件如何打包和分离。Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。也就是说 Less 给我们枯燥单一的样式文件加入了编程机制，这让我们这些前端程序员很受用，所以在工作中大部分程序员都使用了 Leess 开发。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**打包 Less 文件**

安装:

要使用 Less，我们要首先安装 Less 的服务，当然也是用 npm 来进行安装。

npm install --save-dev less

还需要安装 Less-loader 用来打包使用。

npm n install --save-dev less-loader

写 loader 配置：

安装好后，需要在 webpack.config.js 里编写 loader 配置，当然要想正确解析成 CSS，还是需要 style-loader 和 css-loader 的帮助，但是这两个 loader 前边已经讲过了，所以在这里就不重复了，如果你还对这两个 loader 不熟悉，那自行回去补前边的第五节吧。

webpack.config.js

{    test: /\\.less\$/,    use: \[{           loader: "style-loader" // creates style nodes from JS strings        }, {            loader: "css-loader" // translates CSS into CommonJS        , {            loader: "less-loader" // compiles Less to CSS        }\]}

**编写一个 less 文件**

现在 webpack 的配置好了，我们还需要编写一个 less 文件，这里明文为 black.less.里边只做一件是就是把一个层的背景设置成黑色。

black.less

@base :#000;#gogo{    width:300px;    height:300px;    background-color:@base;}

这里#gogo 是层的 ID 名称。@base 是我们设置的变量名称。

**引入到我们 entery.js 文件中**

import less from './css/black.less';

这样我们就可以把 less 文件进行打包了。我们可以使用 webpack 命令打包试一试。

**把 Lees 文件分离。**

我们之前讲了 extract-text-webpack-plugin 这个插件，想把 Less 文件分离出来的方法跟这个几乎一样，之前的我们在第 09 节中讲过，这里我们就只讲 less 的 loader 配置方法。（此处建议收看视频）

{            test: /\\.less\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "less-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

配置好后，你会发现 less 被分离到了 index.css 文件里。

总结：Less 是非常好的 CSS 扩展，但是 Less 得转换稍显麻烦，好的是 webpack 为我们提供了简单轻松的转换方法。希望小伙伴可以学好这一课，在你们的工作中都开始使用 Less 编写你们 css 代码。

## 第 12 节：CSS 进阶：SASS 文件的打包和分离

上节课学习了 Less 的打包和分离，群里使用 SASS 的小伙伴马上就不干了，要求讲一下 SASS 的配置，其实你会了 Less 得配置，SASS 的配置可以很轻松的学会，为了公平公正，那我们就用一节课的时间学一下 SASS 的配置的。

**安装 SASS 打包的 loader**

这里需要 在项目目录下用 npm 安装两个包。node-sass 和 sass-loader

node-sass：因为 sass-loader 依赖于 node-sass，所以需要先安装 node-sass

npm n install --save-dev node-sass

sass-loader:

npm install --save-dev sass-loader

**注意：**在用 npm 安装时，这个 loader 很容易安装失败，最好使用 cnpm 来进行安装。如果你安装一直报错，最好是把 node_modules 文件夹删除后，再重新安装。

编写 loader 配置

{                test: /\\.scss\$/,                use: \[{                    loader: "style-loader" // creates style nodes from JS strings                }, {                    loader: "css-loader" // translates CSS into CommonJS                }, {                    loader: "sass-loader" // compiles Sass to CSS                }\]}

**Sass 文件的编写**

写好 loader 配置后，就可以愉快的编写 sass 文件拉，但是不要忘记把 sass 文件引入到 entery.js 中。

$nav-color: #FFF;#nav {  $width: 100%;  width: $width;  height:30px;  background-color: $nav-color;}

都完成后，你就可以启动我们 npm run server 来查看效果了。

**把 SASS 文件分离。**

{            test: /\\.scss\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "sass-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

这节课算是专门为 sass 使用者录制的吧，其实整体过程和 less 的使用差不多，希望你能在工作中开始使用 sass，并写出漂亮的 css 代码。

## 第 13 节：CSS 进阶：自动处理 CSS3 属性前缀

CSS3 已经成了前端的必会技能，但是你一定为那些属性需要加前缀，那些属性不需要加前缀而头疼。以前我在课程中讲过一个 can i use 的网站，可以查询这些，但是每次都查实在是编码效率太低了。这节课我们就学习一下如何通过 postcss-loader 给 css3 属性自动添加前缀。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**什么是属性前缀**

我们先来看一下代码：

-webkit-transform: rotate(45deg);        transform: rotate(45deg);

为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz 这些前缀。目的就是让我们写的页面在每个浏览器中都可以顺利运行。

**PostCSS**

PostCSS 是一个 CSS 的处理平台，它可以帮助你的 CSS 实现更多的功能，但是今天我们就通过其中的一个加前缀的功能，初步了解一下 PostCSS。

**安装**

需要安装两个包 postcss-loader 和 autoprefixer（自动添加前缀的插件）

npm install --save-dev postcss-loader autoprefixer

postcss.config.js

postCSS 推荐在项目根目录（和 webpack.config.js 同级），建立一个 postcss.config.js 文件。

postcss.config.js

module.exports = {    plugins: \[        require('autoprefixer')    \]}

这就是对 postCSS 一个简单的配置，引入了 autoprefixer 插件。让 postCSS 拥有添加前缀的能力，它会根据 can i use 来增加相应的 css3 属性前缀。

**编写 loader**

对 postcss.config.js 配置完成后，我们还需要编写我们的 loader 配置。

{      test: /\\.css\$/,      use: \[            {              loader: "style-loader"            }, {              loader: "css-loader",              options: {                 modules: true              }            }, {              loader: "postcss-loader"            }      \]}

**提取 CSS**

配置提取 CSS 的 loader 配置.

{    test: /\\.css\$/,    use: extractTextPlugin.extract({        fallback: 'style-loader',        use: \[            { loader: 'css-loader', options: { importLoaders: 1 } },            'postcss-loader'        \]    }) }

总结:postcss 还有很多功能，我希望小伙伴学会自学。这里给出 postcss-loader 的 github 地址：[https://github.com/postcss/postcss-loader](https://github.com/postcss/postcss-loader)

## 第 14 节：CSS 进阶：消除未使用的 CSS

像 Bootstrap 这样的框架往往会带有很多 CSS。在项目中通常我们只使用它的一小部分。就算我们自己写 CSS，随着项目的进展，CSS 也会越来越多，有时候需求更改，带来了 DOM 结构的更改，这时候我们可能无暇关注 CSS 样式，造成很多 CSS 的冗余。这节课就学习用 webpack 消除未使用的 CSS。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**PurifyCSS**

使用 PurifyCSS 可以大大减少 CSS 冗余，比如我们经常使用的 BootStrap(140KB)就可以减少到只有 35KB 大小。这在实际开发当中是非常有用的。

**安装 PurifyCSS-webpack**

从名字你就可以看出这是一个插件，而不是 loader。所以这个需要安装还需要引入。 PurifyCSS-webpack 要以来于 purify-css 这个包，所以这两个都需要安装。

npmn  i -D purifycss-webpack purify-css

这里的-D 代表的是–save-dev ,只是一个简写。

**引入 glob**

因为我们需要同步检查 html 模板，所以我们需要引入 node 的 glob 对象使用。在 webpack.config.js 文件头部引入 glob。

const glob = \`require\`('glob');

引入 purifycss-webpack

同样在 webpack.config.js 文件头部引入 purifycss-webpack

const PurifyCSSPlugin = \`require\`("purifycss-webpack");

**配置 plugins**

引入完成后我们需要在 webpack.config.js 里配置 plugins。代码如下，重点看标黄部分。

plugins:\[    //new uglify()     new htmlPlugin({        minify:{            removeAttrubuteQuotes:true        },        hash:true,        template:'./src/index.html'     }),    new extractTextPlugin("css/index.css"),    new PurifyCSSPlugin({        // Give paths to parse for rules. These should be absolute!        paths: glob.sync(path.join(\_\_dirname, 'src/\*.html')),        }) \]

这里配置了一个 paths，主要是需找 html 模板，purifycss 根据这个配置会遍历你的文件，查找哪些 css 被使用了。

**注意：**使用这个插件必须配合 extract-text-webpack-plugin 这个插件，这个插件在前边的课程已经讲解过了。如果你还不会请自学一下。

配置好上边的代码，我们可以故意在 css 文件里写一些用不到的属性，然后用 webpack 打包，你会发现没用的 CSS 已经自动给你删除掉了。在工作中记得一定要配置这个 plugins，因为这决定你代码的质量，非常有用。

## 第 15 节：给 webpack 增加 babel 支持

在前端开发中都开始使用 ES6 的语法了，虽然说 webpack3 增加了一些 ES6 的转换支持，但是实际效果不是很好，也可能是本人技术有限，没发挥出真正的功能。所以我在开发中还是喜欢添加 Babel-loader 的，我也查看了一些别人的 webpack 配置也都增加了 babel-loader，所以这节课我们学习一下如何增加 Babel 支持。（此节文章部分内容引用了 zhangwang 大神的文章内容）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

Babel 是什么？ Babel 其实是一个编译 JavaScript 的平台，它的强大之处表现在可以通过便宜帮你达到以下目的：

使用下一代的 javaScript 代码(ES6,ES7….)，即使这些标准目前并未被当前的浏览器完全支持。

使用基于 JavaScript 进行了扩展的语言，比如 React 的 JSX。

**Babel 的安装与配置**

Babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中，webpack 可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析 ES6 的 babel-preset-es2015 包和解析 JSX 的 babel-preset-react 包）。

我们先一次性安装这些依赖包

cnpm c install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

在 webpack 中配置 Babel 的方法如下：

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',        options:{            presets:\[                "es2015","react"            \]        }    },    exclude:/node_modules/}

现在你已经可以用 webapck 转换 ES6 的语法兼容各个浏览器了，我们可以修改一下 entry.js 的代码如下：

import css from './css/index.css';{    let jspangString = 'Hello Webpack'    document.getElementById('title').innerHTML=jspangString; }

上面的代码使用了 ES6 的 let 声明方法。如果你不使用 Babel 来进行转换，你会发现打包出来的 js 代码没有作兼容处理，使用了 Babel 转换的代码是进行处理过的。

**.babelrc 配置**

虽然 Babel 可以直接在 webpack.config.js 中进行配置，但是考虑到 babel 具有非常多的配置选项，如果卸载 webapck.config.js 中会非常的雍长不可阅读，所以我们经常把配置卸载.babelrc 文件里。

在项目根目录新建.babelrc 文件，并把配置写到文件里。

.babelrc

{    "presets":\["react","es2015"\]}

.webpack.config.js 里的 loader 配置

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',    },    exclude:/node_modules/}

**ENV：**

现在网络上已经不流行 babel-preset-es2015，现在官方推荐使用的是 babel-preset-env,那我们为了紧跟潮流，我们在讲一下 env 的配置方法。

首先需要下载：

npm n install --save-dev babel-preset-env

然后修改.babelrc 里的配置文件。其实只要把之前的 es2015 换成 env 就可以了。

{    "presets":\["react","env"\]}

总结：对于在 React 中 Babel 的使用，如何解析 JSX，我会在后边的课程作详细了解，大家不要着急。在实际工作中还是要安装 Babel 的，这样能更好的兼容每种浏览器，而把 Babel 的配置文件分解出来是最好的选择。

## 第 16 节：打包后如何调试

作为一个程序员每天的大部分工作就是调试自己写的程序，那我们使用了 webpack 后，所以代码都打包到了一起，给调试带来了麻烦，但是 webpack 已经为我们充分考虑好了这点，它支持生产 Source Maps 来方便我们的调试。（敲黑板，这节可能偏理论一点。）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

在使用 webpack 时只要通过简单的 devtool 配置，webapck 就会自动给我们生产 source maps 文件，map 文件是一种对应编译文件和源文件的方法，让我们调试起来更简单。

四种选项

在配置 devtool 时，webpack 给我们提供了四种选项。

- source-map:在一个单独文件中产生一个完整且功能完全的文件。这个文件具有最好的 source map,但是它会减慢打包速度；
- cheap-module-source-map:在一个单独的文件中产生一个不带列映射的 map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号）,会对调试造成不便。
- eval-source-map:使用 eval 打包源文件模块，在同一个文件中生产干净的完整版的 sourcemap，但是对打包后输出的 JS 文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定要不开启这个选项。
- cheap-module-eval-source-map:这是在打包文件时最快的生产 source map 的方法，生产的 Source map 会和打包后的 JavaScript 文件同行显示，没有影射列，和 eval-source-map 选项具有相似的缺点。

四种打包模式，有上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的打包速度的后果就是对执行和调试有一定的影响。

个人意见是，如果大型项目可以使用 source-map，如果是中小型项目使用 eval-source-map 就完全可以应对，需要强调说明的是，source map 只适用于开发阶段，上线前记得修改这些调试设置。

简单的配置：

module.exports = {  devtool: 'eval-source-map',  entry:  \_\_dirname + "/app/main.js",  output: {    path: \_\_dirname + "/public",    filename: "bundle.js"  }}

总结：调试在开发中也是必不可少的，但是一定要记得在上线前一定要修改 webpack 配置，在打出上线包。

## 第 17 节：实战技巧：开发和生产并行设置

一周没有写博客了，这一周都在出差（10 月 9-10 月 12 日），肯定有小伙伴等着看教程了，在这里跟小伙伴说对不起了。这节详细讲讲用 webapck 开发和生产（或者说开发和上线）的那些事。把小伙伴容易迷茫的几个点讲清楚。（从这篇开始强烈建议看视频学习，文章很难表述我的意思）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**依赖不同**

一个项目中是有开发环境和生产环境的，这两个环境的依赖也是不同的。

- 开发依赖：只在开发中用来帮助你进行开发，简化代码或者生成兼容设置的以来包。你可以打开 package.json 来查看，devDependencies 的下面的这些包为开发使用的包。这些包在生产环境中并没有用处。
- 生产依赖：就是比如我们的 js 使用了 jquery，jquery 的程序要在浏览器端起作用，也就是说我们最终的程序也需要这个包，这就是生产依赖。这些包在 dependencies 中。

npm 安装

假如我们要在项目中使用 jquery 库，这时候我们一般有三种安装方法，每种我都详细讲解一下。

**第一种：**

npm install jquery

安装完成后，你会发现在 package.json 中并不存在这个包的依赖。如果你项目拷贝给别人继续开发，或者别人和你 git 合作，再次下载项目 npm install 时就会缺少这个 jquery 包。项目就会无法正常运行，所以这也是我们最不赞成的安装方法。

**第二种：**

npm n install jquery --save

安装完成后，它存在于 package.json 的 dependencies 中，也就是说它是生产环境需要依赖的包（上线时需要的以来包）。

**第三种：**

npm install jquery --save-dev

安装完成后，它存在于 package.json 的 devDependencies 中，也就是说它是开发环境中需要的，上线并不需要这个包的依赖。

**安装全部项目依赖包：**

npm install

安装生产环境依赖包：

npm install --production

**配置生产和开发并行**

我们在以前的配置中设置了一个变量 website，用于静态资源正确找到路径。那如果生产环境和开发环境不一样，而且我们需要来回切换，这时候我们需要更好的设置方法。

var website={    publicPath:"http://192.168.0.104:1717/"}

**修改 package.json 命令**

其实就是添加一个 dev 设置，并通过环境变量来进行区分，下面是 package.json 里的值。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"set type=dev&webapck",    "build": "set type=build&webpack"  },

**修改 webpack.config.js 文件**

可以利用 node 的语法来读取 type 的值，然后根据 type 的值用 if–else 判断。

if(process.env.type== "build"){    var website={        publicPath:"http://192.168.0.104:1717/"    }}else{    var website={        publicPath:"http://cdn.jspang.com/"    }}

如果你说我想看一下传过来的值到底是什么？可以用下面的输出语句。

console.log( encodeURIComponent(process.env.type) );

**Mac 下的 package.json 设置**

MAC 电脑下需要把 set 换成 export，并且要多加一个&符，具体代码如下。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"export type=dev&&webpack",    "build": "export type=build&&webpack"  },

## 第 18 节：实战技巧：webpack 模块化配置

现在的前端开发随着 ES6 的普及已经大面积使用模块化进行开发了，那在 webpack.config.js 配置文件中，如何进行模块化开发那？例如把开发环境的写到一个模块中，把生产环境的写到一个模块中。这节课我们就用一节课的时间学习一下 webpack 模块化配置的技巧。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**JS 中的模块化实现**

先来看一下 JavaScript 如何实现模块话开发。其实很多小伙伴都会这种操作，那我们就当复习了，再预习一遍知识。看下面 ES6 中的模块化代码。

function jspang(){    alert('jspang.com:'+'webpack');}module.exports=jspang;

上面的代码是一个最简单的 es6 模块化写法，我们声明了一个 jspang 方法，并且把这个方法用 module.exports 进行暴露出去。然后我们在入口文件中用 import 进行引入，并进行使用。

import jspang from './jspang.js';jspang();

我们了解如何作 Javascript 的模块化后，其实 webpack 的模块化和上边的过程很类似。

**webpack 模块**

为了让大家容易看懂，我把 webpack.config.js 中的 entry 入口文件进行模块化设置，单独拿出来制作成一个模块。

首先在根目录，新建一个 webpack_config 文件夹，然后新建 entry_webpack.js 文件，代码如下：

entry_webpack.js

//声明 entry 变量 const entry ={};  //声明路径属性 entry.path={    entry:'./src/entry.js'  }//进行模块化 module.exports =entry;

配置的模块化代码编写好以后，需要在 webpack.config.js 中引入，注意这里的引入只能使用 require 的方法。

const entry = require("./webpack_config/entry_webpack.js")

然后在入口文件部分，修改成如下代码：

entry:entry.path,

这时候你可以再次使用 npm run dev 进行测试，你会发现模块化成功了。

**总结：**模块化在实际工作中是必不可少的操作，但是现在的 webpack 教程还很少讲到，大家一定要重视这节，因为如果你搞不清这节的内容，可能你看别人的配置也会看不明白。记得一定要动手练习操作，否则你下面的课程也没办法学习。

## 第 19 节：实战技巧：优雅打包第三方类库

在工作中引用第三方的框架是必不可少的，比如引入 JQuery 或者 Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用 webpack 引入第三方库。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**引入 JQuery**

其实引用第三方库的方法有很多种，但是有些并不是很优雅，还有些方法会出现打包问题，技术胖在这里介绍一下自己工作中引入第三方模块的方法，我们就拿 JQuery 为例。小伙伴们要举一反三，学会后试着自己引入 Vue 试试。

安装 JQuery

npm install --save jquery

安装时需要注意的时 Jquery 最终要在生产环境中使用，所以我们这里要使用–save 进行安装。

**修改 entry.js 文件**

安装好后，还需要引入到我们的 entry.js 中，这里直接使用 import 进行引入就可以。

import \$ from 'jquery';

这里引入是不需要我们写相对路径的，因为 jquery 的包是在 node_modules 里的，只要写一个包名 jquery，系统会自动为我们查找的。

引入好后我们就可以在 entry.js 里使用 jquery，我们可以加入下面的代码，然后进行测试。

\$('#title').html('Hello JSpang');

可以看到上面是标准的 jquery 代码，你可以使用 npm run server 进行测试，现在代码顺利运行了，这说明我们引用的 JQuery 库成功了。需要说的是你不仅可以在入口中进行引入，你还可以在任何你需要的 js 中引入，webpack 并不会重复打包，它只给我们打包一次。

**用 plugin 引入**

如果你觉的上面的方法和 webpack 没什么关系，只是普通的引入，webpack 只是负责了一下打包，这样并没有全局感。那再学习一种在 webapck.config.js 中配置的方法，这种不需要你在入口文件中引入，而是 webpack 给你作了全局引入。这个插件就是 ProvidePlugin。

ProvidePlugin 是一个 webpack 自带的插件，Provide 的意思就是装备、提供。因为 ProvidePlugin 是 webpack 自带的插件，所以要先再 webpack.config.js 中引入 webpack。

constc  webpack = require('webpack');

在 webpack.config.js 里引入必须使用 require，否则会报错的，这点小伙伴们一定要注意。

引入成功后配置我们的 plugins 模块，代码如下。

plugins:\[    new webpack.ProvidePlugin({        \$:"jquery"    })\],

配置好后，就可以在你的入口文件中使用了，而不用再次引入了。这是一种全局的引入，在实际工作中也可以很好的规范项目所使用的第三方库。

**总结：**每一个项目都可能引入第三方类库，而像 Vue 和 Angular 这样的成熟框架都推出了自己的 webpack 框架，比如 vue-cli。但是很多情况还是需要我们手动更改这些配置好的 webpack 来适用于我们的公司项目，所以这节课的知识也是在工作中经常使用的，希望小伙伴们一定要重视并进行练习。

## 第 20 节：实战技巧：watch 的正确使用方法

初级开发阶段，使用 webpack-dev-server 就可以充当服务器和完成打包任务，但时随着你项目的进一步完成，可能需要前后台联调或者两个前端合并代码时，就需要一个公共的服务器了。这时候我们每次保存后手动打包显然效率太低，我们希望的场景是代码发生变化后，只要保存，webpack 自动为我们进行打包。这个工具就是 watch，这节课我们把 wacht 完全学会，你会发现在开发中更加的得心应手。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**watch 的配置**

很多小伙伴认为–warch 直接使用就可以，并没有什么需要讲的。其实这只是初级的用法，但是在学习一种技术时，我们必须要做到了解全部，也就是常说的知其然知其所以然。我们看下面的配置代码，我在代码中已经做出了解释。

watchOptions:{    //检测修改的时间，以毫秒为单位     poll:1000,     //防止重复保存而发生重复编译错误。这里设置的 500 是半秒内重复保存，不进行打包操作     aggregateTimeout:500,     //不监听的目录     ignored:/node_modules/, }

上边的每一行配置我都作了说明，有时候你在没配置的情况下，直接用 webpack –watch 是不起作用的，这时候你需要进行配置这些选项。

配置好后，我们就可以痛快的使用 watch 了，在大型项目中，这大大加快了我们的开发效率，不用反复的手动打包了。

**BannerPlugin 插件**

由于这节课的内容太少了，我们再讲一个工作中的小技巧，再工作中每个人写的代码都要写上备注，为的就是在发生问题时可以找到当时写代码的人。有时候也用于版权声明。

这个插件就是 BannerPlugin，我们使用后会在 JS 中加上我们的版权或开发者声明。

new webpack.BannerPlugin('JSPang 版权所有，看官方免费视频到 jspang.com 收看')

需要注意的是在使用这个插件之前必须引入 webpack。

const webpack = require('webpack');

这时在 dist 目录下的 entery.js 已经加上了版权声明。

## 第 21 节：实战技巧：webpack 优化黑技能

作为一个程序员，无论是写什么程序都 i 要有一颗不断优化的心。webpack 在优化这条路上，也为我们作了很多配置，这节课我们就看看工作中常用的 webpack 优化黑技能。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**ProvidePlugin 和 import**

在第 19 节中学习了如何引入第三方类库，并引入了 jquery，在引用 JQuery 时我们用了两种方法，第一种时 import，第二种时使用 ProvidePlugin 插件。那两种引入方法有什么区别那?

- import 引入方法：引用后不管你在代码中使用不适用该类库，都会把该类库打包起来，这样有时就会让代码产生冗余。
- ProvidePlugin 引入方法：引用后只有在类库使用时，才按需进行打包，所以建议在工作使用插件的方式进行引入。 具体的对比操作，会在视频中演示，你会看出两种引入方法的对比打包结果。差距还是蛮大的。

**抽离 JQuery**

上边的方法只是优化的第一步，工作中你会发现，不适用的类库几乎我们也不会引入，所以上边只是一个必要操作的第一步。那往往把第三方类库抽离出来，才是最好的解决方法。

**第一步：修改入口文件**

抽离的第一步是修改入口文件，把我们的 JQuery 也加入到入口文件中，看下面的代码。

webpack.config.js

entry:{        entry:'./src/entry.js',        jquery:'jquery' },

**第二步：引入插件**

我们需要引入 optimize 优化插件，插件里边是需要配置的，具体配置项看下面的代码。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:'jquery',    //把文件打包到哪里，是一个路径     filename:"assets/js/jquery.min.js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

minChunks 一般都是固定配置，但是不写是不行的，你会打包失败。

filename 是可以省略的，这是直接打包到了打包根目录下，我们这里直接打包到了 dist 文件夹下边。

配置完成后，我们可以先删掉以前打包的 dist 目录，然后用 webpack 再次打包，你会发现 jquery 被抽离了出来，并且我们的 entry.js 文件变的很小。

**多个第三方类库抽离**

会了如何抽离 Jquery，但是在实际开发中，我们会引用不止一个第三方类库，这时也需要抽离。我们拿引入 Vue 为例，看看如何抽离出来。

第一步:我们先用 npm 进行安装。

npm instawll vue --save

注意这里是–save，而不是–save-dev。因为这个类库在生产环境中也是要使用的。

第二步：在入口配置中引入 vue 和 jquery

entry:{    entry:'./src/entry.js',    jquery:'jquery',    vue:'vue'},

只是多比上边多加了一个 vue 选项。

第三步：修改 CommonsChunkPlugin 配置

需要修改两个位置：

- 第一个是在 name 属性里把原来的字符串改为数组，因为我们要引入多个模块，所以是数组；
- 第二个是在 filename 属性中把我们输出的文件名改为匹配付\[name\],这项操作就是打包出来的名字跟随我们打包前的模块。

下面是我们修改的代码，你可以跟 jquery 抽离时对比一下。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:\['jquery','vue'\],    //把文件打包到哪里，是一个路径     filename:"assets/js/\[name\].js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

配置好后，我们就可以在控制台输入 webpack 进行打包了。你会看到我们预想的结果，jquery 和 vue 都被我们抽离出来了。

**总结：**在项目开发中，我们很使用很多第三方类库，那好的做法就是把第三方这些类库全部抽离处理，这样在项目维护和性能上都是不错的选择。希望学会这个技巧后，你也能在工作中使用上。

## 第 22 节：实战技巧：静态资源集中输出

工作中会有一些已经存在但在项目中没有引用的图片资源或者其他静态资源（比如设计图、开发文档），这些静态资源有可能是文档，也有可能是一些额外的图片。项目组长会要求你打包时保留这些静态资源，直接打包到制定文件夹。其实打包这些资源只需要用到 copy-webpack-plugin。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

使用 copy-webpack-plugin copy-webpack-plugin 就是专门为我们作静态资源转移的插件，不过它不同上两节使用的插件，它是需要安装的。

**插件安装**

插件的安装只要使用 npm 就可以了。

cnpm c install --save-dev copy-webpack-plugin

如果在安装过程中出错，你可以使用 npm 来进行安装。

**引入插件**

安装好后，需要在 webpack.config.js 文件的头部引入这个插件才可以使用。

constc  copyWebpackPlugin= require("copy-webpack-plugin");

**配置插件**

引入之后我们就可以在 plugins 里边进行配置插件了，我们先看下面的插件配置代码，然后再进行详细讲解。

new copyWebpackPlugin(\[{        from:\_\_dirname+'/src/public',        to:'./public'    }\])

- from:要打包的静态资源目录地址，这里的\_\_dirname 是指项目目录下，是 node 的一种语法，可以直接定位到本机的项目目录中。
- to:要打包到的文件夹路径，跟随 output 配置中的目录。所以不需要再自己加\_\_dirname。

配置好后，我们就可以使用 webpack 进行打包了，你会发现图片按照我们的配置打包了过去。

*总结：*你是不是觉的学习起来越来越容易了，因为你经过 20 多节课的学习，已经基本掌握了 webpack 的知识，剩下的就是不断练习和在实际项目中发现新的需求，然后找到新的 loader 或者 pulgin 来解决你的问题。

## 第 23 节：实战技巧：Json 配置文件使用

在实际工作中，我们的项目都会配置一个 Json 的文件或者说 API 文件，作为项目的配置文件。有时候你也会从后台读取到一个 json 的文件，这节课就学习如何在 webpack 环境中使用 Json。如果你会 webpack1 或者 webpack2 版本中，你是需要加载一个 json-loader 的 loader 进来的，但是在 webpack3.x 版本中，你不再需要另外引入了。

**读出 Json 内容**

第一步：现在我们的 index.html 模板中加入一个层，并给层一个 Id，为了是在 javascript 代码中可以方便引用。

<div id="json"></div>

第二步：到 src 文件夹下，找到入口文件，我这里是 entry.js 文件。修改里边的代码，如下：

var json =require('../config.json');document.getElementById("json").innerHTML= json.name;

这两行代码非常简单，第一行是引入我们的 json 文件，第二行驶写入到到 DOM 中。

第三步：启用我们的 npm run server 命令就可以在浏览器中看到结果了。

**说说热更新**

其实在 webpack3 中启用热加载相当的容易，只要加入 HotModuleReplacementPlugin 这个插件就可以了。

new webpack.HotModuleReplacementPlugin()

现在只要你启动 npm run server 后，修改 index.html 中的内容，浏览器可以自动给我们更新出最新的页面。

但这里说的热加更新和我们平时写程序的热加载不是一回事，比如说我们 Vue 或者 React 中的热更新，并不是刷新整个页面，而是一个局部更新，而这里的更新是重新刷新了页面。

这点小伙伴们要搞清楚。

**总结：**这节主要回答了两个同学的问题，这两个问题在实际开发中也经常用到，所以我就总结成课，给小伙伴们讲解一下，希望对你们有所帮助。

## 第 01 节：认识 WebPack 的作用

如果您已经在前端行业中，WebPack 在业界的流行程度自然必备多说，成为了前端小白升级为前端工程师的必备技能。如果你对 webpack 还不够熟悉，那你在前端前进的脚步会受到阻碍，但是你幸运的搜索到了这篇文章。（但是文章可能不会讲解如何从 1.0、2.0 版本升级 3.0 版本的知识，而是直接讲解 3.0 的知识，所以你可能需要有一个空杯心态来学习）

在学习过程中，我希望你能每节看完文章后，都可以自己亲手做一做，如果你不作就不会出现错误，不出现错误，你就没办法增长经验，那你就什么都学不会。相信我，慢慢来，比较快。

**前端为什么需要 WebPack？**

现在的前端网页功能丰富，特别是 SPA（single page web application 单页应用）技术流行后，JavaScript 的复杂度增加和需要一大堆依赖包，还需要解决 SCSS，Less……新增样式的扩展写法的编译工作。所以现代化的前端已经完全依赖于 WebPack 的辅助了。

现在最流行的三个前端框架，可以说和 webpack 已经紧密相连，框架官方都推出了和自身框架依赖的 webpack 构建工具。

- React.js+WebPack
- Vue.js+WebPack
- AngluarJS+WebPack

从此可以看出，无论你前端走那条线，你都要有很强的 Webpack 知识，才能祝你成为这个框架领域的大牛。

**什么是 WebPack？**

WebPack 可以看做是模块打包机：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript 等），并将其转换和打包为合适的格式供浏览器使用。在 3.0 出现后，Webpack 还肩负起了优化项目的责任。

这段话有三个重点：

- 打包：可以把多个 Javascript 文件打包成一个文件，减少服务器压力和下载带宽。
- 转换：把拓展语言转换成为普通的 JavaScript，让浏览器顺利运行。
- 优化：前端变的越来越复杂后，性能也会遇到问题，而 WebPack 也开始肩负起了优化和提升性能的责任。

我们可以从下图再次了解一下 WebPack 的作用:

**安装 WebPack**

看了这么久，一定着急动手作一作了。要使用 WebPack 就要先进行安装，就和你要使用微信，必须在手机上下载微信的 APP 一样，但是不同的是 WebPack 的安装，采用的是命令行 npm 形式的安装。

这里我以 windows 系统为例，给大家做截图示范。苹果安装稍有不同，不过大同小异（如果有问题，可以直接进群交流，进群方法看文章开头）。

**具体安装方法：**

用 win+R 打开运行对话框，输入 cmd 进入命令行模式。然后找到你想开始项目的地方，输入下方代码：

mkdir webpack_democd webpack_demo

第一句是建立一个文件夹，第二句是进入这个文件夹。这个文件夹就是我们的项目文件目录了，文件夹建立好后，可以通过下面命令安装 WebPack。

需要注意的是,你在执行下一步时必须安装 node，可以通过 node -v 来查看 node 安装情况和版本，如果没有安装，要先安装 node 才可以继续进行。

//全局安装 npm install -g webpack

如果你这时安装失败了（出现了报错信息），一般有三种可能：

- 检查你 node 的版本号，如果版本号过低，升级为最新版本。
- 网络问题，可以考虑使用 cnpm 来安装（这个是淘宝实时更新的镜像）,具体可以登录 cnpm 的官方网站学习[http://npm.taobao.org/。](http://npm.taobao.org/。)
- 权限问题，在 Liux、Mac 安装是需要权限，如果你是 Windows 系统，主要要使用以管理员方式安装。

**注意：**全局安装是可以的，但是 webpack 官方是不推荐的。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

**对项目目录进行安装**

全局安装完成后，我们还要进行一个项目目录的安装。在用 npm 安装前，我们先要进行一下初始化，初始化的主要目的是生成 package.json 文件（这是一个标准的 npm 说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等，如果你对此文件还不了解，可以看看 node 的相关知识）。

在命令行输入：

npm n init

输入完成后，npm 终端会问你关于项目的名称，描述……一堆内容，如果你不考虑发布到 npm 上，这些内容都不重要，而且我们后期还可以用文本的形式修改这些内容。现在我们只要一路回车就完成了初始化。这时用 dir 命令已经可以看到生成的 package.json 文件了。

输入下面命令进行项目目录的安装：

npm install --save-dev webpack

这里的参数–save 是要保存到 package.json 中，dev 是在开发时使用这个包，而生产环境中不使用。

开发环境 and 生产环境：

- 开发环境：在开发时需要的环境，这里指在开发时需要依赖的包。
- 生产环境：程序开发完成，开始运行后的环境，这里指要使项目运行，所需要的依赖包。

**查看 webpack 版本**

你安装好后，会想知道你现在 webpack 版本，在工作中交流时，也会经常问到你，你的打包版本是什么？这时候我们可以用下面的命令进行查看。

webpackw  -v

可以看到我现在的版本的 3.6.0 版本，这是目前（2017/9/16）最新的版本了。出现了版本号，也说明你的 webpack 安装成功了。

看到这里，我们第一节的内容就完成了，我建议你停一下，把 webpack 安装到你的电脑上，再进行向下观看，如果在安装时遇到什么问题，可以在下方的留言区给我留言。

## 第 02 节：让你快速上手一个 Demo

上节课已经安装好了 Webpack 到电脑上，这节课就开始一个简单的 Demo，让你快速上手和熟悉 Webpack 的基本用法，学习并作完这节课内容你就可以和朋友小吹一下说：我也会 Webpack。

**建立基本项目结构**

首先进入上节课我们建立的 webpack_demo 目录（每个人建立的位置不同，可能建立在了 D 盘或者 E 盘）。进入后在根目录建立两个文件夹，分别是 src 文件夹和 dist 文件夹：

- src 文件夹：用来存放我们编写的 javascript 代码，可以简单的理解为用 JavaScript 编写的模块。
- dist 文件夹：用来存放供浏览器读取的文件，这个是 webpack 打包成的文件。

你可以理解成 src 是源码文件，dist 是我们编译打包好的文件；一个用于开发环境，一个用于生产环境。

**编写程序文件：**

文件夹建立好后，我们在 dist 文件下手动建立一个 index.html 文件，并写入下面的代码。

/dist/index.html

<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="X-UA-Compatible" content="ie=edge">    <title>jspang webpack</title></head><body>    <div id="title"></div>    <script src="./bundle.js"></script></body></html>

这里引入了一个 JavaScript 的 bundle.js 文件。这个文件现在还没有，这是用 webpack 执行打包命令后生产的文件。我们的 index.html 写好后，接下来在 src 文件夹下建立 entery.js 的文件，用于编写我们的 JavaScript 代码，也是我们的入口文件。

src/entery.js

document.getElementById('title').innerHTML='Hello Webpack';

这个文件的代码很简单，就是在

标签里写入 Hello Webpack 这句话。

**第一次 Webpack 打包**

Webpack 其实是可以在终端（命令行）中使用的，基本使用方法如下：

webpack {entry file} {destination for bundled file}

- {entery file}:入口文件的路径，本文中就是 src/entery.js 的路径；
- {destination for bundled file}:填写打包后存放的路径。
- 注意：在命令行中是不需要写{ }的。

执行的结果如下图：

命令执行成功后，会在 dist 目录下出现 bundle.js 文件，这时我们就可以在浏览器中预览结果了，网页中显示出了 Hello Webpack 的信息。

**总结：**

从这个 Demo 中你会了解到 webpack 的基本用法和使用过程，并会了命令行打包的方法。在这节文章的最后，我还是要强调，你一定要把本节内容在自己的电脑上敲一遍，这样你才能深入了解。

## 第 03 节：配置文件：入口和出口

**首先要说明的是：学习这节课前，务必作完上节课的代码，否则你会学的一脸懵逼。**

上节课通过一个小 Demo 我们对 Webpack 有了初步了解，但是上节课的终端打包方案，在实际开发中并不使用，而是使用 Webpack 的配置文件的方式进行设置。这节课我们就学一下配置文件的大体结构和入口出口文件的配置。

**配置文件 webpack.config.js**

webpack.config.js 就是 Webpack 的配置文件，这个文件需要自己在项目根目录下手动建立。建立好后我们对其进行配置，先看下面的代码（webpack.config.js 的基本结构），这是一个没有内容的标准 webpack 配置模版。

webpack.config.js

module.exports={    //入口文件的配置项     entry:{},    //出口文件的配置项     output:{},    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

- entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
- output：配置出口文件的地址，在 webpack2.X 版本后，支持多出口配置。
- module：配置模块，主要是解析 CSS 和图片转换压缩等功能。
- plugins：配置插件，根据你的需要配置不同功能的插件。
- devServer：配置开发服务功能，后期我们会详细讲解。

entry 选项（入口配置）

这个选项就是配置我们要压缩的文件一般是 JavaScript 文件（当然也可以是 CSS…..）。按照上节课的代码(如果你上节课的代码还没作，那你可以返回去重新作一下)，这里要填写的是 src 目录下的 entery.js 文件。

wepback.config.js 中的 entry 选项

//入口文件的配置项 entry:{    //里面的 entery 是可以随便写的     entry:'./src/entry.js'},

**output 选项（出口配置）**

出口配置是用来告诉 webpack 最后打包文件的地址和文件名称的。按照上节课的操作，应该打包到 dist 目录下。在编写出口文件时，我们需要用到一点 Node 的知识，如果你还不会 Node 也没有 关系，就简单的两句代码，你记住就可以了（在视频中我还有详细的讲解）。

//出口文件的配置项 output:{    //打包的路径文职     path:path.resolve(\_\_dirname,'dist'),    //打包的文件名称     filename:'bundle.js' },

如果你只这样写，是会报错的：找不到 path 这个东西。所以我们要在 webpack.config.js 的头部引入 path，代码如下：

const  path  =  \`require\`('path');

这里我们使用了 const，这是 ES6 的语法，如果你对 ES6 还不熟悉，也可以看技术胖 ES6 的课程哦（[http://old.jspag.com/2017/06/03/es6/）。](http://old.jspag.com/2017/06/03/es6/）。)

其实 path.resolve(\_\_dirname,’dist’)就是获取了项目的绝对路径。如果你还是不理解，我会在视频中给你进行演示。

filename:是打包后的文件名称，这里我们起名为 bundle.js。

现在 webpack.config.js 的代码：

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'bundle.js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

这个代码写完后，可以在终端中直接输入 webpack 就会进行打包。

在实际开发中我们都是通过配置文件进行打包的，所以必须要掌握好。

**多入口、多出口配置**

Webpack 在版本 1 的时候很难设置多出口文件，但是在 2 版本开始就变的很方便了。直接看多入口和多出口的文件配置，然后可以和单一出口对比一下，你会发现这种设置非常简单（只需改动两点配置就可以）。

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js',        //这里我们又引入了一个入口文件         entry2:'./src/entry2.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

可以看到代码的第 7 和 14 行进行了增加和修改，在入口文件配置中，增加了一个 entry2.js 的入口文件（这个文件你需要自己手动建立），这时候要打包的就有了两个入口文件。在代码 14 行我们把原来的 bundle.js 修改成了\[name\].js。

\[name\]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。

**总结：**

这节课的内容是需要仔细消化的，不求你记住，但是要练习，因为你无论配置任何项目的 Webpack 都要作这些操作。你可以把本文当作一个字典，在需要的时候进行查询。

## 第 04 节：配置文件： 服务和热更新

作为一个前端工程师，最大的编程需求之一就是所见即所得的工具，也就是常说的热更新。现在一般有点规模的公司都为前端工程师准备了双屏显示器，其目的就是一个屏幕编写代码，一个屏幕实时显示页面效果。这节课就学习用 webpack3.6 版本实现热更新效果。

从这节课开始视频需要购买才可以观看。教程一共 30 集左右，学完后完全可以达到独立构建中大型项目水平，从此 webpack 不在是你职业发展的瓶颈了。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**设置 webpack-dev-server**

要执行 webpack-dev-server 是要先用 npm install webpack-dev-server –save-dev 来进行下载的。下载好后，需要配置一下 devServer。最简单的 devServer 配置项只有四个。先看一下代码，然后我再作解释。

/webpack.config.js

devServer:{        //设置基本目录结构         contentBase:path.resolve(\_\_dirname,'dist'),        //服务器的 IP 地址，可以使用 IP 也可以使用 localhost        host:'localhost',        //服务端压缩是否开启         compress:true,        //配置服务端口号         port:1717    }

- contentBase:配置服务器基本运行路径，用于找到程序打包地址。
- host：服务运行地址，建议使用本机 IP，这里为了讲解方便，所以用 localhost。
- compress：服务器端压缩选型，一般设置为开启，如果你对服务器压缩感兴趣，可以自行学习。
- port：服务运行端口，建议不使用 80，很容易被占用，这里使用了 1717.

**注意：**这里需要使用 npm 来进行安装 webpack-dev-server 了， 命令如下：

npm install webpack-dev-server --save-dev

这是本地安装，所以使用了–save-dev。

配置好后，你可以试着在终端中输入 webpack-dev-server,如果可以执行成功，但是往往提示下面的错误（或者是无法找到内部或外部命令）。

出现下面的错误不用慌张，我们只要在 package.json 里配置一下 scripts 选项就可以执行了。

/package.json

"scripts": {    "server":"webpack-dev-server" },

配置好保存后，在终端里输入 npm run server 打开服务器。然后在浏览器地址栏输入[http://localhost:1717 就可以看到结果了。](http://localhost:1717就可以看到结果了。)

**支持热更新**

在 npm run server 启动后，它是有一种监控机制的（也叫 watch）。它可以监控到我们修改源码，并立即在浏览器里给我们更新。

注意：这里只是我们的 webpack3.6 版本支持，在 3.5 版本时要支持热更新还需要一些其他的操作。因为已经有了成熟的 3.6 版本，我就不再介绍低版本的操作方法。还有一种情况。如果你都设置好了，但是不进行热更新，可能是你系统的问题，在 Linux 和 Ma 上支持良好，在 Windows 上有时会出现问题。

如果你在操作时，在 Windows 上出现问题了，请在文章下方给我留言。

## 第 05 节：模块：CSS 文件打包

Webpack 在生产环境中有一个重要的作用就是减少 http 的请求数，就是把多个文件打包到一个 js 里，这样请求数就可以减少好多。这节课我们就学习一个重要的知识，把我们的 CSS 文件打包。在学习 CSS 打包之前，需要先对 webpack.config.js 里的 Loaders 配置项进行了解。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**Loaders**

Loaders 是 Webpack 最重要的功能之一，他也是 Webpack 如此盛行的原因。通过使用不同的 Loader，Webpack 可以的脚本和工具，从而对不同的文件格式进行特定处理。

简单的举几个 Loaders 使用例子：

- 可以把 SASS 文件的写法转换成 CSS，而不在使用其他转换工具。
- 可以把 ES6 或者 ES7 的代码，转换成大多浏览器兼容的 JS 代码。
- 可以把 React 中的 JSX 转换成 JavaScript 代码。

注意：所有的 Loaders 都需要在 npm 中单独进行安装，并在 webpack.config.js 里进行配置。下面我们对 Loaders 的配置型简单梳理一下。

- test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
- use：loader 名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
- include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- query：为 loaders 提供额外的设置选项（可选）。

明白了 Loader 是什么后，就开始这节课的正题，如何打包 CSS 文件。

**打包 CSS 文件：**

建立 index.css 文件

要打包 CSS 你必须先要有个 CSS 文件，在/src 目录下，我们建立一个 css 文件夹，在文件夹里建立 index.css 文件。代码内容如下。

./src/css/index.css

body{    background-color: red;    color: white;}

CSS 文件建立好后，需要引入到入口文件中，才可以打包到，这里我们引入到 entry.js 中。

/src/entery.js 中在首行加入代码：

import i css from './css/index.css';

CSS 和引入做好后，我们就需要使用 loader 来解析 CSS 文件了，这里我们需要两个解析用的 loader，分别是 style-loader 和 css-loader。

**style-loader:**

它是用来处理 css 文件中的 url()等，npm 中的网址：https://www.npmjs.com/package/style-loader

用 npm install 进行项目安装：

npm install style-loader --save-dev

**css-loader：**

它是用来将 css 插入到页面的 style 标签。npm 中的网址：[https://www.npmjs.com/package/css-loader](https://www.npmjs.com/package/css-loader)

用 npm install 进行项目安装：

npm n install --save-dev css-loader

两个 loader 都下载安装好后，我们就可以配置我们 loaders 了。

**loaders 配置：**

修改 webpack.config.js 中 module 属性中的配置代码如下：

webpack.config.js

module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            }          \]    },

这个文件的详细讲解，我们在上面已经提及，如果你还是无法理解可以观看视频。

**总结：**

敲黑板，这节课的内容非常重要，上面的配置过程最好作两遍以上，完全了解后，再进行下节课的学习。loader 的使用也决定着你 webpack 水平的高低。所以一定要重视和练习。

## 第 06 节：插件配置：配置 JS 压缩

通过五节课的学习，我相信小伙伴已经对 Webpack 有所入门。这节课让我们初步了解插件（plugins\[ \]）的用法。在学习新知识之前，我先回答一个小伙伴提的问题，他的问题就是：“我看到别人写的 CSS 打包配置文件和你写的不一样，是不是有其他的写法？”

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**loader 的三种写法：**

上节课学习了如何把 CSS 文件进行打包到 JS 当中去，有小伙伴就提问，我看到别人的 CSS 打包的写法和你的写法不太一样，是不是他们写错了，loader 还有几种写法，这里我们就看两种另外的写法。

**第一种写法：直接用 use。**

module:{        rules:\[            {                test:/\\.css\$/,                use:\['style-loader','css-loader'\]            }        \]    },

**第二种写法：把 use 换成 loader。**

module:{        rules:\[            {                test:/\\.css\$/,                loader:\['style-loader','css-loader'\]            }        \]    },

**第三种写法：用 use+loader 的写法：**

module:{        rules:\[            {                test:/\\.css\$/,                use: \[                    {                        loader: "style-loader"                    }, {                        loader: "css-loader"                    }                \]            }        \]    },

由此看出，webpack 的扩展和灵活性是非常强的，你习惯于那种写法都可以。最重要的是，你看见别人项目的其他写法也不要慌张，自己去试一试，有可能就可以 Get 到新知识。

**压缩 JS 代码：**

现在你写的 JS 代码，在上线之前，都是需要进行压缩的，在没有 webpack 和 gulp 这些工具前，你可能需要找一个压缩软件或者在线进行压缩，在 Webpack 中可以很轻松的实现 JS 代码的压缩，它是通过插件的方式实现的，这里我们就先来引入一个 uglifyjs-webpack-plugin(JS 压缩插件，简称 uglify)。

**注意：**虽然 uglifyjs 是插件，但是 webpack 版本里默认已经集成，不需要再次安装。

**引入：**

我们需要在 webpack.config.js 中引入 uglifyjs-webpack-glugin 插件

const uglify = \`require\`('uglifyjs-webpack-plugin');

引入后在 plugins 配置里 new 一个 uglify 对象就可以了，代码如下。

plugins:\[        new uglify()    \],

这时候在终端中使用 webpack 进行打包，你会发现 JS 代码已经被压缩了。如果你用的 VSCode 的话，可以按 Alt+Z 让他文件自动换行，查看效果。

贴出通过 6 节课学习，现在 webpack.config.js 文件中的所有代码，这样大家可以对照学习。

const path=\`require\`('path');const uglify = \`require\`('uglifyjs-webpack-plugin');module.exports={    entry:{        entry:'./src/entry.js',        entry2:'./src/entry2.js'    },    output:{        path:path.resolve(\_\_dirname,'dist'),        filename:'\[name\].js'    },    module:{        rules:\[            {                test:/\\.css\$/,                use: \["style-loader", "css-loader"\]            }        \]    },    plugins:\[        new uglify()    \],    devServer:{       contentBase:path.resolve(\_\_dirname,'dist'),       host:'192.168.0.104',       compress:true,       port:1717    }}

## 第 07 节：插件配置：HTML 文件的发布

有经验的小伙伴其实一眼就可以看出，现在我们的项目结构是有问题的，我们把 index.html 直接放到了 dist 文件夹下，这肯定是不正确的，应该放到我们 src 目录下。但是前期我们为了循序渐进的学习，所以把 index.html 放到了 dist 目录下。这节课我们就学习如何把 html 文件打包到我们的生产路径下。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**devServer 和 JS 压缩的冲突**

上节课学习了 JS 压缩，在视频中我使用了 webpack 进行打包，而没有使用 npm run server 进行预览，也就是说没有启用 devServer 里的配置。那有些小伙伴在学习完视频后，在终端中输入了 npm run server 进行了预览，发现终端中报错了。

要弄明白这个问题，我们先要弄清楚什么是开发环境，什么是生产环境。开发环境中是基本不会对 js 进行压缩的，在开发预览时我们需要明确的报错行数和错误信息，所以完全没有必要压缩 JavasScript 代码。而生产环境中才会压缩 JS 代码，用于加快程序的工作效率。devServer 用于开发环境，而压缩 JS 用于生产环境，在开发环境中作生产环境的事情所以 Webpack 设置了冲突报错。

在实际开发中，webpack 配置文件是分开的，开发环境一个文件，生产环境一个文件。所以在讲课之前我并没有发现这个问题，感谢小伙伴提出的问题。如果你在学习过程中有任何疑问，欢迎在文章下方留言。

**打包 HTML 文件**

我们先把 dist 中的 html 文件剪切到 src 目录中，并去掉我们的 JS 引入代码（webpack 会自动为我们引入 JS），因为这才是我们真实工作的目录文件结构。

然后我们配置 webpack.config.js 文件，先引入我们的 html-webpack-plugin 插件。

const htmlPlugin= \`require\`('html-webpack-plugin');

引入后使用 npm 进行安装包。

npm install --save-dev html-webpack-plugin

最后在 webpack.config.js 里的 plugins 里进行插件配置，配置代码如下。

new htmlPlugin({            minify:{                removeAttributeQuotes:true            },            hash:true,            template:'./src/index.html'         })

- minify：是对 html 文件进行压缩，removeAttrubuteQuotes 是却掉属性的双引号。
- hash：为了开发中 js 有缓存效果，所以加入 hash，这样可以有效避免缓存 JS。
- template：是要打包的 html 模版路径和文件名称。

上边的都配置完成后，我们就可以在终端中使用 webpack，进行打包。你会看到 index.html 文件已经被打包到我们的 dist 目录下了，并且自动为我们引入了路口的 JS 文件。

**总结：**

html 文件的打包可以有效的区分开发目录和生产目录，在 webpack 的配置中也要搞清楚哪些配置用于生产环境，哪些配置用于开发环境，避免两种环境的配置冲突。

## 第 08 节：图片迈坑：CSS 中的图片处理

在学习 Webapck 过程中你可能遇到的第一个坑就是 CSS 中的图片处理。很多 webpack 新手都在图片的坑中无法自拔（有的小伙伴在开发环境中是可以找到图片的，但是一打包后就找不到图片了，有的小伙伴是不知道如何正确引入 html 或者 css 中的图片，导致程序出错），我们将用三节课时间搞彻底走出 webpack 图片的坑。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**图片写入 CSS**

你可以先在网上找一个图片，我这里就自恋的使用了我的头像，如果你需要下载，也可以下载（当然你可以完全自己找一个自己喜欢的）。

找到图片后在 src 目录下新建一个 images 文件夹，把图片放入 images 文件夹。

在 index.html 文件中增加一个放置 div 的标签（需要注意的是这里修改的是 src 下的 index.html 文件，不是 dist 下的，这点新手很容易弄混，要格外注意），代码如下。

<div id="tupian"></div>

编写 css 文件，把你用的图片作为背景显示。

#tupian{   background-image: url(../images/manhua.png);   width:466px;   height:453px;}

编写完成后，我们可以试着用 webpack 去打包一下。你会发现终端中是报错的，具体错误可以看下图。

**file-loader、url-loader**

上面的错误是由于缺少 loader 的解析，对 loader 其实我们并不陌生，因为前边已经学习了 CSS 打包的 loader。我们先安装两个解析图片用的 loader。

安装 file-loader 和 url-loader

npm install --save-dev file-loader url-loader

安装好后我们需要对两个 loader 进行基本的了解，学习尽量做到知其然知其所以然。

**file-loader：**解决引用路径的问题，拿 background 样式用 url 引入背景图来说，我们都知道，webpack 最终会将各个模块打包成一个文件，因此我们样式中的 url 路径是相对入口 html 页面的，而不是相对于原始 css 文件所在的路径的。这就会导致图片引入失败。这个问题是用 file-loader 解决的，file-loader 可以解析项目中的 url 引入（不仅限于 css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

**url-loader：**如果图片较多，会发很多 http 请求，会降低页面性能。这个问题可以通过 url-loader 解决。url-loader 会将引入的图片编码，生成 dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此 url-loader 提供了一个 limit 参数，小于 limit 字节的文件会被转为 DataURl，大于 limit 的还会使用 file-loader 进行 copy。

配置 url-loader

我们安装好后，就可以使用这个 loader 了，记得在 loader 使用时不需要用 require 引入，在 plugins 才需要使用 require 引入。

webpack.config.js 文件

//模块：例如解读 CSS,图片如何转换，压缩     module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

- test:/.(png|jpg|gif)/是匹配图片文件后缀名称。
- use：是指定使用的 loader 和 loader 的配置参数。
- limit：是把小于 500000B 的文件打成 Base64 的格式，写入 JS。

写好后就可以使用 webpack 进行打包了，这回你会发现打包很顺利的完成了。具体的 Base64 的格式，你可以查看视频中的样子。

**为什么只使用了 url-loader**

有的小伙伴会发现我们并没有在 webpack.config.js 中使用 file-loader，但是依然打包成功了。我们需要了解 file-loader 和 url-loader 的关系。url-loader 和 file-loader 是什么关系呢？简答地说，url-loader 封装了 file-loader。url-loader 不依赖于 file-loader，即使用 url-loader 时，只需要安装 url-loader 即可，不需要安装 file-loader，因为 url-loader 内置了 file-loader。通过上面的介绍，我们可以看到，url-loader 工作分两种情况：

1.文件大小小于 limit 参数，url-loader 将会把文件转为 DataURL（Base64 格式）；

2.文件大小大于 limit，url-loader 会调用 file-loader 进行处理，参数也会直接传给 file-loader。

也就是说，其实我们只安装一个 url-loader 就可以了。但是为了以后的操作方便，我们这里就顺便安装上 file-loader。

## 第 09 节：图片迈坑：CSS 分离与图片路径处理

通过上节课的学习已经能把小图片打包成 Base64 格式，也对 webpack 对图片的打包有个基本了解。这节课主要学习两个知识：第一个是把 CSS 从 JavasScript 代码中分离出来，第二个是如何处理分离出来后 CSS 中的图片路径不对问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**CSS 分离:extract-text-webpack-plugin**

有些简单的交互页面中，你的 JavasScript 页面代码会非常少，而大部分代码都在 CSS 中，这时候项目组长会要求把 CSS 单独提取出来，方便以后更改。遇到这个需求你不要惊慌，已经有大神为我们准备好了对象的插件（plugin）。

extract-text-webpack-plugin

这个插件就可以完美的解决我们提取 CSS 的需求，但是 webpack 官方其实并不建议这样作，他们认为 CSS 就应该打包到 JavasScript 当中以减少 http 的请求数。但现实中的需求往往不是我们前端能控制的，有些需求是我们不能控制的，分离 CSS 就是这样一个既合理由不合理的需求。

**安装：**录制课程时的版本是 3.0.0 版本，直接使用 npm install 就可以安装。

npm install --save-dev extract-text-webpack-plugin

**引入：**安装完成后，需要先用 require 引入。

const extractTextPlugin = \`require\`("extract-text-webpack-plugin");

**设置 Plugins：**引入成功后需要在 plugins 属性中进行配置。这里只要 new 一下这个对象就可以了。

new extractTextPlugin("/css/index.css")

这里的/css/index.css 是分离后的路径位置。这部配置完成后，包装代码：还要修改原来我们的 style-loader 和 css-loader。

修改代码如下。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

作完上边这四部后，就可以使用 webpack 进行打包了。

**图片路径问题：**

利用 extract-text-webpack-plugin 插件很轻松的就把 CSS 文件分离了出来，但是 CSS 路径并不正确，很多小伙伴就在这里搞个几天还是没有头绪，网上也给出了很多的解决方案，我觉的最好的解决方案是使用 publicPath 解决，我也一直在用。

publicPath：是在 webpack.config.js 文件的 output 选项中，主要作用就是处理静态文件路径的。

在处理前，我们在 webpack.config.js 上方声明一个对象，叫 website。

var website ={    publicPath:"http://192.168.1.108:1717/"}

注意，这里的 IP 和端口，是你本机的 ip 或者是你 devServer 配置的 IP 和端口。

然后在 output 选项中引用这个对象的 publicPath 属性。

//出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js',        publicPath:website.publicPath    },

配置完成后，你再使用 webpack 命令进行打包，你会发现原来的相对路径改为了绝对路径，这样来讲速度更快。

**总结：**这节课我们实现了 CSS 的分离，并在分离后处理了图片路径不对的问题。处理路径的方法一定要充分理解，因为这在工作中经常用到。

## 第 10 节：图片迈坑：处理 HTML 中的图片

在 webpack 中是不喜欢你使用标签来引入图片的，但是我们作前端的人特别热衷于这种写法，国人也为此开发了一个：html-withimg-loader。他可以很好的处理我们在 html 中引入图片的问题。因为是国人开发的，文档都是中文，所以学习起来还是比较简单的。所以在学习新课之前我们先解决两个小伙伴的问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

只有项目安装 webpack，如何打包？ 有的小伙伴在学习视频时，并没有全局安装 webpack，而是使用了项目安装。首先我要说的是，这种做法是 webpack 推崇的，webpack 并不鼓励全局安装 webpack。但是小伙伴看我视频中直接在终端用 webpack 进行打包项目，他使用时会出现不是内部命令或者外部命令。

这时候需要配置 package.json 里的 scripts 选项，我们以前的课程已经学习了配置 webpack-dev-server 命令，在这个命令下面我们再加一个 build 命令进行打包项目使用。

"scripts": {    "server": "webpack-dev-server --open",    "build":"webpack"  },

配置完成后，可以在控制台输入 npm run build 进行打包。

**如何把图片放到指定的文件夹下**

前边两节课程，打包后的图片并没有放到 images 文件夹下，要放到 images 文件夹下，其实只需要配置我们的 url-loader 选项就可以了。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:5000,                       outputPath:'images/',                   }               }\]            }          \]    },

这回你再执行打包就可以把图片打包到 images 文件夹里了。

**html-withimg-loader**

html-withimg-loader 就是我们今天的重点了，这个插件并不是很火，也是我个人喜欢的一个小 loader。解决的问题就是在 hmtl 文件中引入标签的问题。

安装：

npm install html-withimg-loader --save

**配置 loader**

webpack.config.js

{    test: /\\.(htm|html)\$/i,     use:\[ 'html-withimg-loader'\] }

然后在终端中可以进行打包了。你会发现 images 被很好的打包了。并且路径也完全正确。

总结：我们通过三节课的时间讲了 webpack 图片中的坑，这些坑在我初学 webpack 初期给我带来了不少的麻烦，我也算是倾囊相教了，希望小伙伴们有所收获。在你工作中遇到图片的问题，也可以返回文章里进行对比查找问题。

## 第 11 节：CSS 进阶：Less 文件的打包和分离

第 05 节中已经讲过 CSS 文件的打包，后来又讲了 CSS 分离。这节我们讲解一下 Less 文件如何打包和分离。Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。也就是说 Less 给我们枯燥单一的样式文件加入了编程机制，这让我们这些前端程序员很受用，所以在工作中大部分程序员都使用了 Leess 开发。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**打包 Less 文件**

安装:

要使用 Less，我们要首先安装 Less 的服务，当然也是用 npm 来进行安装。

npm install --save-dev less

还需要安装 Less-loader 用来打包使用。

npm n install --save-dev less-loader

写 loader 配置：

安装好后，需要在 webpack.config.js 里编写 loader 配置，当然要想正确解析成 CSS，还是需要 style-loader 和 css-loader 的帮助，但是这两个 loader 前边已经讲过了，所以在这里就不重复了，如果你还对这两个 loader 不熟悉，那自行回去补前边的第五节吧。

webpack.config.js

{    test: /\\.less\$/,    use: \[{           loader: "style-loader" // creates style nodes from JS strings        }, {            loader: "css-loader" // translates CSS into CommonJS        , {            loader: "less-loader" // compiles Less to CSS        }\]}

**编写一个 less 文件**

现在 webpack 的配置好了，我们还需要编写一个 less 文件，这里明文为 black.less.里边只做一件是就是把一个层的背景设置成黑色。

black.less

@base :#000;#gogo{    width:300px;    height:300px;    background-color:@base;}

这里#gogo 是层的 ID 名称。@base 是我们设置的变量名称。

**引入到我们 entery.js 文件中**

import less from './css/black.less';

这样我们就可以把 less 文件进行打包了。我们可以使用 webpack 命令打包试一试。

**把 Lees 文件分离。**

我们之前讲了 extract-text-webpack-plugin 这个插件，想把 Less 文件分离出来的方法跟这个几乎一样，之前的我们在第 09 节中讲过，这里我们就只讲 less 的 loader 配置方法。（此处建议收看视频）

{            test: /\\.less\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "less-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

配置好后，你会发现 less 被分离到了 index.css 文件里。

总结：Less 是非常好的 CSS 扩展，但是 Less 得转换稍显麻烦，好的是 webpack 为我们提供了简单轻松的转换方法。希望小伙伴可以学好这一课，在你们的工作中都开始使用 Less 编写你们 css 代码。

## 第 12 节：CSS 进阶：SASS 文件的打包和分离

上节课学习了 Less 的打包和分离，群里使用 SASS 的小伙伴马上就不干了，要求讲一下 SASS 的配置，其实你会了 Less 得配置，SASS 的配置可以很轻松的学会，为了公平公正，那我们就用一节课的时间学一下 SASS 的配置的。

**安装 SASS 打包的 loader**

这里需要 在项目目录下用 npm 安装两个包。node-sass 和 sass-loader

node-sass：因为 sass-loader 依赖于 node-sass，所以需要先安装 node-sass

npm n install --save-dev node-sass

sass-loader:

npm install --save-dev sass-loader

**注意：**在用 npm 安装时，这个 loader 很容易安装失败，最好使用 cnpm 来进行安装。如果你安装一直报错，最好是把 node_modules 文件夹删除后，再重新安装。

编写 loader 配置

{                test: /\\.scss\$/,                use: \[{                    loader: "style-loader" // creates style nodes from JS strings                }, {                    loader: "css-loader" // translates CSS into CommonJS                }, {                    loader: "sass-loader" // compiles Sass to CSS                }\]}

**Sass 文件的编写**

写好 loader 配置后，就可以愉快的编写 sass 文件拉，但是不要忘记把 sass 文件引入到 entery.js 中。

$nav-color: #FFF;#nav {  $width: 100%;  width: $width;  height:30px;  background-color: $nav-color;}

都完成后，你就可以启动我们 npm run server 来查看效果了。

**把 SASS 文件分离。**

{            test: /\\.scss\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "sass-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

这节课算是专门为 sass 使用者录制的吧，其实整体过程和 less 的使用差不多，希望你能在工作中开始使用 sass，并写出漂亮的 css 代码。

## 第 13 节：CSS 进阶：自动处理 CSS3 属性前缀

CSS3 已经成了前端的必会技能，但是你一定为那些属性需要加前缀，那些属性不需要加前缀而头疼。以前我在课程中讲过一个 can i use 的网站，可以查询这些，但是每次都查实在是编码效率太低了。这节课我们就学习一下如何通过 postcss-loader 给 css3 属性自动添加前缀。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**什么是属性前缀**

我们先来看一下代码：

-webkit-transform: rotate(45deg);        transform: rotate(45deg);

为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz 这些前缀。目的就是让我们写的页面在每个浏览器中都可以顺利运行。

**PostCSS**

PostCSS 是一个 CSS 的处理平台，它可以帮助你的 CSS 实现更多的功能，但是今天我们就通过其中的一个加前缀的功能，初步了解一下 PostCSS。

**安装**

需要安装两个包 postcss-loader 和 autoprefixer（自动添加前缀的插件）

npm install --save-dev postcss-loader autoprefixer

postcss.config.js

postCSS 推荐在项目根目录（和 webpack.config.js 同级），建立一个 postcss.config.js 文件。

postcss.config.js

module.exports = {    plugins: \[        require('autoprefixer')    \]}

这就是对 postCSS 一个简单的配置，引入了 autoprefixer 插件。让 postCSS 拥有添加前缀的能力，它会根据 can i use 来增加相应的 css3 属性前缀。

**编写 loader**

对 postcss.config.js 配置完成后，我们还需要编写我们的 loader 配置。

{      test: /\\.css\$/,      use: \[            {              loader: "style-loader"            }, {              loader: "css-loader",              options: {                 modules: true              }            }, {              loader: "postcss-loader"            }      \]}

**提取 CSS**

配置提取 CSS 的 loader 配置.

{    test: /\\.css\$/,    use: extractTextPlugin.extract({        fallback: 'style-loader',        use: \[            { loader: 'css-loader', options: { importLoaders: 1 } },            'postcss-loader'        \]    }) }

总结:postcss 还有很多功能，我希望小伙伴学会自学。这里给出 postcss-loader 的 github 地址：[https://github.com/postcss/postcss-loader](https://github.com/postcss/postcss-loader)

## 第 14 节：CSS 进阶：消除未使用的 CSS

像 Bootstrap 这样的框架往往会带有很多 CSS。在项目中通常我们只使用它的一小部分。就算我们自己写 CSS，随着项目的进展，CSS 也会越来越多，有时候需求更改，带来了 DOM 结构的更改，这时候我们可能无暇关注 CSS 样式，造成很多 CSS 的冗余。这节课就学习用 webpack 消除未使用的 CSS。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**PurifyCSS**

使用 PurifyCSS 可以大大减少 CSS 冗余，比如我们经常使用的 BootStrap(140KB)就可以减少到只有 35KB 大小。这在实际开发当中是非常有用的。

**安装 PurifyCSS-webpack**

从名字你就可以看出这是一个插件，而不是 loader。所以这个需要安装还需要引入。 PurifyCSS-webpack 要以来于 purify-css 这个包，所以这两个都需要安装。

npmn  i -D purifycss-webpack purify-css

这里的-D 代表的是–save-dev ,只是一个简写。

**引入 glob**

因为我们需要同步检查 html 模板，所以我们需要引入 node 的 glob 对象使用。在 webpack.config.js 文件头部引入 glob。

const glob = \`require\`('glob');

引入 purifycss-webpack

同样在 webpack.config.js 文件头部引入 purifycss-webpack

const PurifyCSSPlugin = \`require\`("purifycss-webpack");

**配置 plugins**

引入完成后我们需要在 webpack.config.js 里配置 plugins。代码如下，重点看标黄部分。

plugins:\[    //new uglify()     new htmlPlugin({        minify:{            removeAttrubuteQuotes:true        },        hash:true,        template:'./src/index.html'     }),    new extractTextPlugin("css/index.css"),    new PurifyCSSPlugin({        // Give paths to parse for rules. These should be absolute!        paths: glob.sync(path.join(\_\_dirname, 'src/\*.html')),        }) \]

这里配置了一个 paths，主要是需找 html 模板，purifycss 根据这个配置会遍历你的文件，查找哪些 css 被使用了。

**注意：**使用这个插件必须配合 extract-text-webpack-plugin 这个插件，这个插件在前边的课程已经讲解过了。如果你还不会请自学一下。

配置好上边的代码，我们可以故意在 css 文件里写一些用不到的属性，然后用 webpack 打包，你会发现没用的 CSS 已经自动给你删除掉了。在工作中记得一定要配置这个 plugins，因为这决定你代码的质量，非常有用。

## 第 15 节：给 webpack 增加 babel 支持

在前端开发中都开始使用 ES6 的语法了，虽然说 webpack3 增加了一些 ES6 的转换支持，但是实际效果不是很好，也可能是本人技术有限，没发挥出真正的功能。所以我在开发中还是喜欢添加 Babel-loader 的，我也查看了一些别人的 webpack 配置也都增加了 babel-loader，所以这节课我们学习一下如何增加 Babel 支持。（此节文章部分内容引用了 zhangwang 大神的文章内容）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

Babel 是什么？ Babel 其实是一个编译 JavaScript 的平台，它的强大之处表现在可以通过便宜帮你达到以下目的：

使用下一代的 javaScript 代码(ES6,ES7….)，即使这些标准目前并未被当前的浏览器完全支持。

使用基于 JavaScript 进行了扩展的语言，比如 React 的 JSX。

**Babel 的安装与配置**

Babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中，webpack 可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析 ES6 的 babel-preset-es2015 包和解析 JSX 的 babel-preset-react 包）。

我们先一次性安装这些依赖包

cnpm c install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

在 webpack 中配置 Babel 的方法如下：

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',        options:{            presets:\[                "es2015","react"            \]        }    },    exclude:/node_modules/}

现在你已经可以用 webapck 转换 ES6 的语法兼容各个浏览器了，我们可以修改一下 entry.js 的代码如下：

import css from './css/index.css';{    let jspangString = 'Hello Webpack'    document.getElementById('title').innerHTML=jspangString; }

上面的代码使用了 ES6 的 let 声明方法。如果你不使用 Babel 来进行转换，你会发现打包出来的 js 代码没有作兼容处理，使用了 Babel 转换的代码是进行处理过的。

**.babelrc 配置**

虽然 Babel 可以直接在 webpack.config.js 中进行配置，但是考虑到 babel 具有非常多的配置选项，如果卸载 webapck.config.js 中会非常的雍长不可阅读，所以我们经常把配置卸载.babelrc 文件里。

在项目根目录新建.babelrc 文件，并把配置写到文件里。

.babelrc

{    "presets":\["react","es2015"\]}

.webpack.config.js 里的 loader 配置

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',    },    exclude:/node_modules/}

**ENV：**

现在网络上已经不流行 babel-preset-es2015，现在官方推荐使用的是 babel-preset-env,那我们为了紧跟潮流，我们在讲一下 env 的配置方法。

首先需要下载：

npm n install --save-dev babel-preset-env

然后修改.babelrc 里的配置文件。其实只要把之前的 es2015 换成 env 就可以了。

{    "presets":\["react","env"\]}

总结：对于在 React 中 Babel 的使用，如何解析 JSX，我会在后边的课程作详细了解，大家不要着急。在实际工作中还是要安装 Babel 的，这样能更好的兼容每种浏览器，而把 Babel 的配置文件分解出来是最好的选择。

## 第 16 节：打包后如何调试

作为一个程序员每天的大部分工作就是调试自己写的程序，那我们使用了 webpack 后，所以代码都打包到了一起，给调试带来了麻烦，但是 webpack 已经为我们充分考虑好了这点，它支持生产 Source Maps 来方便我们的调试。（敲黑板，这节可能偏理论一点。）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

在使用 webpack 时只要通过简单的 devtool 配置，webapck 就会自动给我们生产 source maps 文件，map 文件是一种对应编译文件和源文件的方法，让我们调试起来更简单。

四种选项

在配置 devtool 时，webpack 给我们提供了四种选项。

- source-map:在一个单独文件中产生一个完整且功能完全的文件。这个文件具有最好的 source map,但是它会减慢打包速度；
- cheap-module-source-map:在一个单独的文件中产生一个不带列映射的 map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号）,会对调试造成不便。
- eval-source-map:使用 eval 打包源文件模块，在同一个文件中生产干净的完整版的 sourcemap，但是对打包后输出的 JS 文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定要不开启这个选项。
- cheap-module-eval-source-map:这是在打包文件时最快的生产 source map 的方法，生产的 Source map 会和打包后的 JavaScript 文件同行显示，没有影射列，和 eval-source-map 选项具有相似的缺点。

四种打包模式，有上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的打包速度的后果就是对执行和调试有一定的影响。

个人意见是，如果大型项目可以使用 source-map，如果是中小型项目使用 eval-source-map 就完全可以应对，需要强调说明的是，source map 只适用于开发阶段，上线前记得修改这些调试设置。

简单的配置：

module.exports = {  devtool: 'eval-source-map',  entry:  \_\_dirname + "/app/main.js",  output: {    path: \_\_dirname + "/public",    filename: "bundle.js"  }}

总结：调试在开发中也是必不可少的，但是一定要记得在上线前一定要修改 webpack 配置，在打出上线包。

## 第 17 节：实战技巧：开发和生产并行设置

一周没有写博客了，这一周都在出差（10 月 9-10 月 12 日），肯定有小伙伴等着看教程了，在这里跟小伙伴说对不起了。这节详细讲讲用 webapck 开发和生产（或者说开发和上线）的那些事。把小伙伴容易迷茫的几个点讲清楚。（从这篇开始强烈建议看视频学习，文章很难表述我的意思）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**依赖不同**

一个项目中是有开发环境和生产环境的，这两个环境的依赖也是不同的。

- 开发依赖：只在开发中用来帮助你进行开发，简化代码或者生成兼容设置的以来包。你可以打开 package.json 来查看，devDependencies 的下面的这些包为开发使用的包。这些包在生产环境中并没有用处。
- 生产依赖：就是比如我们的 js 使用了 jquery，jquery 的程序要在浏览器端起作用，也就是说我们最终的程序也需要这个包，这就是生产依赖。这些包在 dependencies 中。

npm 安装

假如我们要在项目中使用 jquery 库，这时候我们一般有三种安装方法，每种我都详细讲解一下。

**第一种：**

npm install jquery

安装完成后，你会发现在 package.json 中并不存在这个包的依赖。如果你项目拷贝给别人继续开发，或者别人和你 git 合作，再次下载项目 npm install 时就会缺少这个 jquery 包。项目就会无法正常运行，所以这也是我们最不赞成的安装方法。

**第二种：**

npm n install jquery --save

安装完成后，它存在于 package.json 的 dependencies 中，也就是说它是生产环境需要依赖的包（上线时需要的以来包）。

**第三种：**

npm install jquery --save-dev

安装完成后，它存在于 package.json 的 devDependencies 中，也就是说它是开发环境中需要的，上线并不需要这个包的依赖。

**安装全部项目依赖包：**

npm install

安装生产环境依赖包：

npm install --production

**配置生产和开发并行**

我们在以前的配置中设置了一个变量 website，用于静态资源正确找到路径。那如果生产环境和开发环境不一样，而且我们需要来回切换，这时候我们需要更好的设置方法。

var website={    publicPath:"http://192.168.0.104:1717/"}

**修改 package.json 命令**

其实就是添加一个 dev 设置，并通过环境变量来进行区分，下面是 package.json 里的值。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"set type=dev&webapck",    "build": "set type=build&webpack"  },

**修改 webpack.config.js 文件**

可以利用 node 的语法来读取 type 的值，然后根据 type 的值用 if–else 判断。

if(process.env.type== "build"){    var website={        publicPath:"http://192.168.0.104:1717/"    }}else{    var website={        publicPath:"http://cdn.jspang.com/"    }}

如果你说我想看一下传过来的值到底是什么？可以用下面的输出语句。

console.log( encodeURIComponent(process.env.type) );

**Mac 下的 package.json 设置**

MAC 电脑下需要把 set 换成 export，并且要多加一个&符，具体代码如下。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"export type=dev&&webpack",    "build": "export type=build&&webpack"  },

## 第 18 节：实战技巧：webpack 模块化配置

现在的前端开发随着 ES6 的普及已经大面积使用模块化进行开发了，那在 webpack.config.js 配置文件中，如何进行模块化开发那？例如把开发环境的写到一个模块中，把生产环境的写到一个模块中。这节课我们就用一节课的时间学习一下 webpack 模块化配置的技巧。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**JS 中的模块化实现**

先来看一下 JavaScript 如何实现模块话开发。其实很多小伙伴都会这种操作，那我们就当复习了，再预习一遍知识。看下面 ES6 中的模块化代码。

function jspang(){    alert('jspang.com:'+'webpack');}module.exports=jspang;

上面的代码是一个最简单的 es6 模块化写法，我们声明了一个 jspang 方法，并且把这个方法用 module.exports 进行暴露出去。然后我们在入口文件中用 import 进行引入，并进行使用。

import jspang from './jspang.js';jspang();

我们了解如何作 Javascript 的模块化后，其实 webpack 的模块化和上边的过程很类似。

**webpack 模块**

为了让大家容易看懂，我把 webpack.config.js 中的 entry 入口文件进行模块化设置，单独拿出来制作成一个模块。

首先在根目录，新建一个 webpack_config 文件夹，然后新建 entry_webpack.js 文件，代码如下：

entry_webpack.js

//声明 entry 变量 const entry ={};  //声明路径属性 entry.path={    entry:'./src/entry.js'  }//进行模块化 module.exports =entry;

配置的模块化代码编写好以后，需要在 webpack.config.js 中引入，注意这里的引入只能使用 require 的方法。

const entry = require("./webpack_config/entry_webpack.js")

然后在入口文件部分，修改成如下代码：

entry:entry.path,

这时候你可以再次使用 npm run dev 进行测试，你会发现模块化成功了。

**总结：**模块化在实际工作中是必不可少的操作，但是现在的 webpack 教程还很少讲到，大家一定要重视这节，因为如果你搞不清这节的内容，可能你看别人的配置也会看不明白。记得一定要动手练习操作，否则你下面的课程也没办法学习。

## 第 19 节：实战技巧：优雅打包第三方类库

在工作中引用第三方的框架是必不可少的，比如引入 JQuery 或者 Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用 webpack 引入第三方库。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**引入 JQuery**

其实引用第三方库的方法有很多种，但是有些并不是很优雅，还有些方法会出现打包问题，技术胖在这里介绍一下自己工作中引入第三方模块的方法，我们就拿 JQuery 为例。小伙伴们要举一反三，学会后试着自己引入 Vue 试试。

安装 JQuery

npm install --save jquery

安装时需要注意的时 Jquery 最终要在生产环境中使用，所以我们这里要使用–save 进行安装。

**修改 entry.js 文件**

安装好后，还需要引入到我们的 entry.js 中，这里直接使用 import 进行引入就可以。

import \$ from 'jquery';

这里引入是不需要我们写相对路径的，因为 jquery 的包是在 node_modules 里的，只要写一个包名 jquery，系统会自动为我们查找的。

引入好后我们就可以在 entry.js 里使用 jquery，我们可以加入下面的代码，然后进行测试。

\$('#title').html('Hello JSpang');

可以看到上面是标准的 jquery 代码，你可以使用 npm run server 进行测试，现在代码顺利运行了，这说明我们引用的 JQuery 库成功了。需要说的是你不仅可以在入口中进行引入，你还可以在任何你需要的 js 中引入，webpack 并不会重复打包，它只给我们打包一次。

**用 plugin 引入**

如果你觉的上面的方法和 webpack 没什么关系，只是普通的引入，webpack 只是负责了一下打包，这样并没有全局感。那再学习一种在 webapck.config.js 中配置的方法，这种不需要你在入口文件中引入，而是 webpack 给你作了全局引入。这个插件就是 ProvidePlugin。

ProvidePlugin 是一个 webpack 自带的插件，Provide 的意思就是装备、提供。因为 ProvidePlugin 是 webpack 自带的插件，所以要先再 webpack.config.js 中引入 webpack。

constc  webpack = require('webpack');

在 webpack.config.js 里引入必须使用 require，否则会报错的，这点小伙伴们一定要注意。

引入成功后配置我们的 plugins 模块，代码如下。

plugins:\[    new webpack.ProvidePlugin({        \$:"jquery"    })\],

配置好后，就可以在你的入口文件中使用了，而不用再次引入了。这是一种全局的引入，在实际工作中也可以很好的规范项目所使用的第三方库。

**总结：**每一个项目都可能引入第三方类库，而像 Vue 和 Angular 这样的成熟框架都推出了自己的 webpack 框架，比如 vue-cli。但是很多情况还是需要我们手动更改这些配置好的 webpack 来适用于我们的公司项目，所以这节课的知识也是在工作中经常使用的，希望小伙伴们一定要重视并进行练习。

## 第 20 节：实战技巧：watch 的正确使用方法

初级开发阶段，使用 webpack-dev-server 就可以充当服务器和完成打包任务，但时随着你项目的进一步完成，可能需要前后台联调或者两个前端合并代码时，就需要一个公共的服务器了。这时候我们每次保存后手动打包显然效率太低，我们希望的场景是代码发生变化后，只要保存，webpack 自动为我们进行打包。这个工具就是 watch，这节课我们把 wacht 完全学会，你会发现在开发中更加的得心应手。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**watch 的配置**

很多小伙伴认为–warch 直接使用就可以，并没有什么需要讲的。其实这只是初级的用法，但是在学习一种技术时，我们必须要做到了解全部，也就是常说的知其然知其所以然。我们看下面的配置代码，我在代码中已经做出了解释。

watchOptions:{    //检测修改的时间，以毫秒为单位     poll:1000,     //防止重复保存而发生重复编译错误。这里设置的 500 是半秒内重复保存，不进行打包操作     aggregateTimeout:500,     //不监听的目录     ignored:/node_modules/, }

上边的每一行配置我都作了说明，有时候你在没配置的情况下，直接用 webpack –watch 是不起作用的，这时候你需要进行配置这些选项。

配置好后，我们就可以痛快的使用 watch 了，在大型项目中，这大大加快了我们的开发效率，不用反复的手动打包了。

**BannerPlugin 插件**

由于这节课的内容太少了，我们再讲一个工作中的小技巧，再工作中每个人写的代码都要写上备注，为的就是在发生问题时可以找到当时写代码的人。有时候也用于版权声明。

这个插件就是 BannerPlugin，我们使用后会在 JS 中加上我们的版权或开发者声明。

new webpack.BannerPlugin('JSPang 版权所有，看官方免费视频到 jspang.com 收看')

需要注意的是在使用这个插件之前必须引入 webpack。

const webpack = require('webpack');

这时在 dist 目录下的 entery.js 已经加上了版权声明。

## 第 21 节：实战技巧：webpack 优化黑技能

作为一个程序员，无论是写什么程序都 i 要有一颗不断优化的心。webpack 在优化这条路上，也为我们作了很多配置，这节课我们就看看工作中常用的 webpack 优化黑技能。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**ProvidePlugin 和 import**

在第 19 节中学习了如何引入第三方类库，并引入了 jquery，在引用 JQuery 时我们用了两种方法，第一种时 import，第二种时使用 ProvidePlugin 插件。那两种引入方法有什么区别那?

- import 引入方法：引用后不管你在代码中使用不适用该类库，都会把该类库打包起来，这样有时就会让代码产生冗余。
- ProvidePlugin 引入方法：引用后只有在类库使用时，才按需进行打包，所以建议在工作使用插件的方式进行引入。 具体的对比操作，会在视频中演示，你会看出两种引入方法的对比打包结果。差距还是蛮大的。

**抽离 JQuery**

上边的方法只是优化的第一步，工作中你会发现，不适用的类库几乎我们也不会引入，所以上边只是一个必要操作的第一步。那往往把第三方类库抽离出来，才是最好的解决方法。

**第一步：修改入口文件**

抽离的第一步是修改入口文件，把我们的 JQuery 也加入到入口文件中，看下面的代码。

webpack.config.js

entry:{        entry:'./src/entry.js',        jquery:'jquery' },

**第二步：引入插件**

我们需要引入 optimize 优化插件，插件里边是需要配置的，具体配置项看下面的代码。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:'jquery',    //把文件打包到哪里，是一个路径     filename:"assets/js/jquery.min.js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

minChunks 一般都是固定配置，但是不写是不行的，你会打包失败。

filename 是可以省略的，这是直接打包到了打包根目录下，我们这里直接打包到了 dist 文件夹下边。

配置完成后，我们可以先删掉以前打包的 dist 目录，然后用 webpack 再次打包，你会发现 jquery 被抽离了出来，并且我们的 entry.js 文件变的很小。

**多个第三方类库抽离**

会了如何抽离 Jquery，但是在实际开发中，我们会引用不止一个第三方类库，这时也需要抽离。我们拿引入 Vue 为例，看看如何抽离出来。

第一步:我们先用 npm 进行安装。

npm instawll vue --save

注意这里是–save，而不是–save-dev。因为这个类库在生产环境中也是要使用的。

第二步：在入口配置中引入 vue 和 jquery

entry:{    entry:'./src/entry.js',    jquery:'jquery',    vue:'vue'},

只是多比上边多加了一个 vue 选项。

第三步：修改 CommonsChunkPlugin 配置

需要修改两个位置：

- 第一个是在 name 属性里把原来的字符串改为数组，因为我们要引入多个模块，所以是数组；
- 第二个是在 filename 属性中把我们输出的文件名改为匹配付\[name\],这项操作就是打包出来的名字跟随我们打包前的模块。

下面是我们修改的代码，你可以跟 jquery 抽离时对比一下。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:\['jquery','vue'\],    //把文件打包到哪里，是一个路径     filename:"assets/js/\[name\].js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

配置好后，我们就可以在控制台输入 webpack 进行打包了。你会看到我们预想的结果，jquery 和 vue 都被我们抽离出来了。

**总结：**在项目开发中，我们很使用很多第三方类库，那好的做法就是把第三方这些类库全部抽离处理，这样在项目维护和性能上都是不错的选择。希望学会这个技巧后，你也能在工作中使用上。

## 第 22 节：实战技巧：静态资源集中输出

工作中会有一些已经存在但在项目中没有引用的图片资源或者其他静态资源（比如设计图、开发文档），这些静态资源有可能是文档，也有可能是一些额外的图片。项目组长会要求你打包时保留这些静态资源，直接打包到制定文件夹。其实打包这些资源只需要用到 copy-webpack-plugin。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

使用 copy-webpack-plugin copy-webpack-plugin 就是专门为我们作静态资源转移的插件，不过它不同上两节使用的插件，它是需要安装的。

**插件安装**

插件的安装只要使用 npm 就可以了。

cnpm c install --save-dev copy-webpack-plugin

如果在安装过程中出错，你可以使用 npm 来进行安装。

**引入插件**

安装好后，需要在 webpack.config.js 文件的头部引入这个插件才可以使用。

constc  copyWebpackPlugin= require("copy-webpack-plugin");

**配置插件**

引入之后我们就可以在 plugins 里边进行配置插件了，我们先看下面的插件配置代码，然后再进行详细讲解。

new copyWebpackPlugin(\[{        from:\_\_dirname+'/src/public',        to:'./public'    }\])

- from:要打包的静态资源目录地址，这里的\_\_dirname 是指项目目录下，是 node 的一种语法，可以直接定位到本机的项目目录中。
- to:要打包到的文件夹路径，跟随 output 配置中的目录。所以不需要再自己加\_\_dirname。

配置好后，我们就可以使用 webpack 进行打包了，你会发现图片按照我们的配置打包了过去。

*总结：*你是不是觉的学习起来越来越容易了，因为你经过 20 多节课的学习，已经基本掌握了 webpack 的知识，剩下的就是不断练习和在实际项目中发现新的需求，然后找到新的 loader 或者 pulgin 来解决你的问题。

## 第 23 节：实战技巧：Json 配置文件使用

在实际工作中，我们的项目都会配置一个 Json 的文件或者说 API 文件，作为项目的配置文件。有时候你也会从后台读取到一个 json 的文件，这节课就学习如何在 webpack 环境中使用 Json。如果你会 webpack1 或者 webpack2 版本中，你是需要加载一个 json-loader 的 loader 进来的，但是在 webpack3.x 版本中，你不再需要另外引入了。

**读出 Json 内容**

第一步：现在我们的 index.html 模板中加入一个层，并给层一个 Id，为了是在 javascript 代码中可以方便引用。

<div id="json"></div>

第二步：到 src 文件夹下，找到入口文件，我这里是 entry.js 文件。修改里边的代码，如下：

var json =require('../config.json');document.getElementById("json").innerHTML= json.name;

这两行代码非常简单，第一行是引入我们的 json 文件，第二行驶写入到到 DOM 中。

第三步：启用我们的 npm run server 命令就可以在浏览器中看到结果了。

**说说热更新**

其实在 webpack3 中启用热加载相当的容易，只要加入 HotModuleReplacementPlugin 这个插件就可以了。

new webpack.HotModuleReplacementPlugin()

现在只要你启动 npm run server 后，修改 index.html 中的内容，浏览器可以自动给我们更新出最新的页面。

但这里说的热加更新和我们平时写程序的热加载不是一回事，比如说我们 Vue 或者 React 中的热更新，并不是刷新整个页面，而是一个局部更新，而这里的更新是重新刷新了页面。

这点小伙伴们要搞清楚。

**总结：**这节主要回答了两个同学的问题，这两个问题在实际开发中也经常用到，所以我就总结成课，给小伙伴们讲解一下，希望对你们有所帮助。

## 第 01 节：认识 WebPack 的作用

如果您已经在前端行业中，WebPack 在业界的流行程度自然必备多说，成为了前端小白升级为前端工程师的必备技能。如果你对 webpack 还不够熟悉，那你在前端前进的脚步会受到阻碍，但是你幸运的搜索到了这篇文章。（但是文章可能不会讲解如何从 1.0、2.0 版本升级 3.0 版本的知识，而是直接讲解 3.0 的知识，所以你可能需要有一个空杯心态来学习）

在学习过程中，我希望你能每节看完文章后，都可以自己亲手做一做，如果你不作就不会出现错误，不出现错误，你就没办法增长经验，那你就什么都学不会。相信我，慢慢来，比较快。

**前端为什么需要 WebPack？**

现在的前端网页功能丰富，特别是 SPA（single page web application 单页应用）技术流行后，JavaScript 的复杂度增加和需要一大堆依赖包，还需要解决 SCSS，Less……新增样式的扩展写法的编译工作。所以现代化的前端已经完全依赖于 WebPack 的辅助了。

现在最流行的三个前端框架，可以说和 webpack 已经紧密相连，框架官方都推出了和自身框架依赖的 webpack 构建工具。

- React.js+WebPack
- Vue.js+WebPack
- AngluarJS+WebPack

从此可以看出，无论你前端走那条线，你都要有很强的 Webpack 知识，才能祝你成为这个框架领域的大牛。

**什么是 WebPack？**

WebPack 可以看做是模块打包机：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript 等），并将其转换和打包为合适的格式供浏览器使用。在 3.0 出现后，Webpack 还肩负起了优化项目的责任。

这段话有三个重点：

- 打包：可以把多个 Javascript 文件打包成一个文件，减少服务器压力和下载带宽。
- 转换：把拓展语言转换成为普通的 JavaScript，让浏览器顺利运行。
- 优化：前端变的越来越复杂后，性能也会遇到问题，而 WebPack 也开始肩负起了优化和提升性能的责任。

我们可以从下图再次了解一下 WebPack 的作用:

**安装 WebPack**

看了这么久，一定着急动手作一作了。要使用 WebPack 就要先进行安装，就和你要使用微信，必须在手机上下载微信的 APP 一样，但是不同的是 WebPack 的安装，采用的是命令行 npm 形式的安装。

这里我以 windows 系统为例，给大家做截图示范。苹果安装稍有不同，不过大同小异（如果有问题，可以直接进群交流，进群方法看文章开头）。

**具体安装方法：**

用 win+R 打开运行对话框，输入 cmd 进入命令行模式。然后找到你想开始项目的地方，输入下方代码：

mkdir webpack_democd webpack_demo

第一句是建立一个文件夹，第二句是进入这个文件夹。这个文件夹就是我们的项目文件目录了，文件夹建立好后，可以通过下面命令安装 WebPack。

需要注意的是,你在执行下一步时必须安装 node，可以通过 node -v 来查看 node 安装情况和版本，如果没有安装，要先安装 node 才可以继续进行。

//全局安装 npm install -g webpack

如果你这时安装失败了（出现了报错信息），一般有三种可能：

- 检查你 node 的版本号，如果版本号过低，升级为最新版本。
- 网络问题，可以考虑使用 cnpm 来安装（这个是淘宝实时更新的镜像）,具体可以登录 cnpm 的官方网站学习[http://npm.taobao.org/。](http://npm.taobao.org/。)
- 权限问题，在 Liux、Mac 安装是需要权限，如果你是 Windows 系统，主要要使用以管理员方式安装。

**注意：**全局安装是可以的，但是 webpack 官方是不推荐的。这会将您项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。

**对项目目录进行安装**

全局安装完成后，我们还要进行一个项目目录的安装。在用 npm 安装前，我们先要进行一下初始化，初始化的主要目的是生成 package.json 文件（这是一个标准的 npm 说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等，如果你对此文件还不了解，可以看看 node 的相关知识）。

在命令行输入：

npm n init

输入完成后，npm 终端会问你关于项目的名称，描述……一堆内容，如果你不考虑发布到 npm 上，这些内容都不重要，而且我们后期还可以用文本的形式修改这些内容。现在我们只要一路回车就完成了初始化。这时用 dir 命令已经可以看到生成的 package.json 文件了。

输入下面命令进行项目目录的安装：

npm install --save-dev webpack

这里的参数–save 是要保存到 package.json 中，dev 是在开发时使用这个包，而生产环境中不使用。

开发环境 and 生产环境：

- 开发环境：在开发时需要的环境，这里指在开发时需要依赖的包。
- 生产环境：程序开发完成，开始运行后的环境，这里指要使项目运行，所需要的依赖包。

**查看 webpack 版本**

你安装好后，会想知道你现在 webpack 版本，在工作中交流时，也会经常问到你，你的打包版本是什么？这时候我们可以用下面的命令进行查看。

webpackw  -v

可以看到我现在的版本的 3.6.0 版本，这是目前（2017/9/16）最新的版本了。出现了版本号，也说明你的 webpack 安装成功了。

看到这里，我们第一节的内容就完成了，我建议你停一下，把 webpack 安装到你的电脑上，再进行向下观看，如果在安装时遇到什么问题，可以在下方的留言区给我留言。

## 第 02 节：让你快速上手一个 Demo

上节课已经安装好了 Webpack 到电脑上，这节课就开始一个简单的 Demo，让你快速上手和熟悉 Webpack 的基本用法，学习并作完这节课内容你就可以和朋友小吹一下说：我也会 Webpack。

**建立基本项目结构**

首先进入上节课我们建立的 webpack_demo 目录（每个人建立的位置不同，可能建立在了 D 盘或者 E 盘）。进入后在根目录建立两个文件夹，分别是 src 文件夹和 dist 文件夹：

- src 文件夹：用来存放我们编写的 javascript 代码，可以简单的理解为用 JavaScript 编写的模块。
- dist 文件夹：用来存放供浏览器读取的文件，这个是 webpack 打包成的文件。

你可以理解成 src 是源码文件，dist 是我们编译打包好的文件；一个用于开发环境，一个用于生产环境。

**编写程序文件：**

文件夹建立好后，我们在 dist 文件下手动建立一个 index.html 文件，并写入下面的代码。

/dist/index.html

<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="X-UA-Compatible" content="ie=edge">    <title>jspang webpack</title></head><body>    <div id="title"></div>    <script src="./bundle.js"></script></body></html>

这里引入了一个 JavaScript 的 bundle.js 文件。这个文件现在还没有，这是用 webpack 执行打包命令后生产的文件。我们的 index.html 写好后，接下来在 src 文件夹下建立 entery.js 的文件，用于编写我们的 JavaScript 代码，也是我们的入口文件。

src/entery.js

document.getElementById('title').innerHTML='Hello Webpack';

这个文件的代码很简单，就是在

标签里写入 Hello Webpack 这句话。

**第一次 Webpack 打包**

Webpack 其实是可以在终端（命令行）中使用的，基本使用方法如下：

webpack {entry file} {destination for bundled file}

- {entery file}:入口文件的路径，本文中就是 src/entery.js 的路径；
- {destination for bundled file}:填写打包后存放的路径。
- 注意：在命令行中是不需要写{ }的。

执行的结果如下图：

命令执行成功后，会在 dist 目录下出现 bundle.js 文件，这时我们就可以在浏览器中预览结果了，网页中显示出了 Hello Webpack 的信息。

**总结：**

从这个 Demo 中你会了解到 webpack 的基本用法和使用过程，并会了命令行打包的方法。在这节文章的最后，我还是要强调，你一定要把本节内容在自己的电脑上敲一遍，这样你才能深入了解。

## 第 03 节：配置文件：入口和出口

**首先要说明的是：学习这节课前，务必作完上节课的代码，否则你会学的一脸懵逼。**

上节课通过一个小 Demo 我们对 Webpack 有了初步了解，但是上节课的终端打包方案，在实际开发中并不使用，而是使用 Webpack 的配置文件的方式进行设置。这节课我们就学一下配置文件的大体结构和入口出口文件的配置。

**配置文件 webpack.config.js**

webpack.config.js 就是 Webpack 的配置文件，这个文件需要自己在项目根目录下手动建立。建立好后我们对其进行配置，先看下面的代码（webpack.config.js 的基本结构），这是一个没有内容的标准 webpack 配置模版。

webpack.config.js

module.exports={    //入口文件的配置项     entry:{},    //出口文件的配置项     output:{},    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

- entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
- output：配置出口文件的地址，在 webpack2.X 版本后，支持多出口配置。
- module：配置模块，主要是解析 CSS 和图片转换压缩等功能。
- plugins：配置插件，根据你的需要配置不同功能的插件。
- devServer：配置开发服务功能，后期我们会详细讲解。

entry 选项（入口配置）

这个选项就是配置我们要压缩的文件一般是 JavaScript 文件（当然也可以是 CSS…..）。按照上节课的代码(如果你上节课的代码还没作，那你可以返回去重新作一下)，这里要填写的是 src 目录下的 entery.js 文件。

wepback.config.js 中的 entry 选项

//入口文件的配置项 entry:{    //里面的 entery 是可以随便写的     entry:'./src/entry.js'},

**output 选项（出口配置）**

出口配置是用来告诉 webpack 最后打包文件的地址和文件名称的。按照上节课的操作，应该打包到 dist 目录下。在编写出口文件时，我们需要用到一点 Node 的知识，如果你还不会 Node 也没有 关系，就简单的两句代码，你记住就可以了（在视频中我还有详细的讲解）。

//出口文件的配置项 output:{    //打包的路径文职     path:path.resolve(\_\_dirname,'dist'),    //打包的文件名称     filename:'bundle.js' },

如果你只这样写，是会报错的：找不到 path 这个东西。所以我们要在 webpack.config.js 的头部引入 path，代码如下：

const  path  =  \`require\`('path');

这里我们使用了 const，这是 ES6 的语法，如果你对 ES6 还不熟悉，也可以看技术胖 ES6 的课程哦（[http://old.jspag.com/2017/06/03/es6/）。](http://old.jspag.com/2017/06/03/es6/）。)

其实 path.resolve(\_\_dirname,’dist’)就是获取了项目的绝对路径。如果你还是不理解，我会在视频中给你进行演示。

filename:是打包后的文件名称，这里我们起名为 bundle.js。

现在 webpack.config.js 的代码：

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'bundle.js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

这个代码写完后，可以在终端中直接输入 webpack 就会进行打包。

在实际开发中我们都是通过配置文件进行打包的，所以必须要掌握好。

**多入口、多出口配置**

Webpack 在版本 1 的时候很难设置多出口文件，但是在 2 版本开始就变的很方便了。直接看多入口和多出口的文件配置，然后可以和单一出口对比一下，你会发现这种设置非常简单（只需改动两点配置就可以）。

const path = \`require\`('path');module.exports={    //入口文件的配置项     entry:{        entry:'./src/entry.js',        //这里我们又引入了一个入口文件         entry2:'./src/entry2.js'    },    //出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js'    },    //模块：例如解读 CSS,图片如何转换，压缩     module:{},    //插件，用于生产模版和各项功能     plugins:\[\],    //配置 webpack 开发服务功能     devServer:{}}

可以看到代码的第 7 和 14 行进行了增加和修改，在入口文件配置中，增加了一个 entry2.js 的入口文件（这个文件你需要自己手动建立），这时候要打包的就有了两个入口文件。在代码 14 行我们把原来的 bundle.js 修改成了\[name\].js。

\[name\]的意思是根据入口文件的名称，打包成相同的名称，有几个入口文件，就可以打包出几个文件。

**总结：**

这节课的内容是需要仔细消化的，不求你记住，但是要练习，因为你无论配置任何项目的 Webpack 都要作这些操作。你可以把本文当作一个字典，在需要的时候进行查询。

## 第 04 节：配置文件： 服务和热更新

作为一个前端工程师，最大的编程需求之一就是所见即所得的工具，也就是常说的热更新。现在一般有点规模的公司都为前端工程师准备了双屏显示器，其目的就是一个屏幕编写代码，一个屏幕实时显示页面效果。这节课就学习用 webpack3.6 版本实现热更新效果。

从这节课开始视频需要购买才可以观看。教程一共 30 集左右，学完后完全可以达到独立构建中大型项目水平，从此 webpack 不在是你职业发展的瓶颈了。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**设置 webpack-dev-server**

要执行 webpack-dev-server 是要先用 npm install webpack-dev-server –save-dev 来进行下载的。下载好后，需要配置一下 devServer。最简单的 devServer 配置项只有四个。先看一下代码，然后我再作解释。

/webpack.config.js

devServer:{        //设置基本目录结构         contentBase:path.resolve(\_\_dirname,'dist'),        //服务器的 IP 地址，可以使用 IP 也可以使用 localhost        host:'localhost',        //服务端压缩是否开启         compress:true,        //配置服务端口号         port:1717    }

- contentBase:配置服务器基本运行路径，用于找到程序打包地址。
- host：服务运行地址，建议使用本机 IP，这里为了讲解方便，所以用 localhost。
- compress：服务器端压缩选型，一般设置为开启，如果你对服务器压缩感兴趣，可以自行学习。
- port：服务运行端口，建议不使用 80，很容易被占用，这里使用了 1717.

**注意：**这里需要使用 npm 来进行安装 webpack-dev-server 了， 命令如下：

npm install webpack-dev-server --save-dev

这是本地安装，所以使用了–save-dev。

配置好后，你可以试着在终端中输入 webpack-dev-server,如果可以执行成功，但是往往提示下面的错误（或者是无法找到内部或外部命令）。

出现下面的错误不用慌张，我们只要在 package.json 里配置一下 scripts 选项就可以执行了。

/package.json

"scripts": {    "server":"webpack-dev-server" },

配置好保存后，在终端里输入 npm run server 打开服务器。然后在浏览器地址栏输入[http://localhost:1717 就可以看到结果了。](http://localhost:1717就可以看到结果了。)

**支持热更新**

在 npm run server 启动后，它是有一种监控机制的（也叫 watch）。它可以监控到我们修改源码，并立即在浏览器里给我们更新。

注意：这里只是我们的 webpack3.6 版本支持，在 3.5 版本时要支持热更新还需要一些其他的操作。因为已经有了成熟的 3.6 版本，我就不再介绍低版本的操作方法。还有一种情况。如果你都设置好了，但是不进行热更新，可能是你系统的问题，在 Linux 和 Ma 上支持良好，在 Windows 上有时会出现问题。

如果你在操作时，在 Windows 上出现问题了，请在文章下方给我留言。

## 第 05 节：模块：CSS 文件打包

Webpack 在生产环境中有一个重要的作用就是减少 http 的请求数，就是把多个文件打包到一个 js 里，这样请求数就可以减少好多。这节课我们就学习一个重要的知识，把我们的 CSS 文件打包。在学习 CSS 打包之前，需要先对 webpack.config.js 里的 Loaders 配置项进行了解。

购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**Loaders**

Loaders 是 Webpack 最重要的功能之一，他也是 Webpack 如此盛行的原因。通过使用不同的 Loader，Webpack 可以的脚本和工具，从而对不同的文件格式进行特定处理。

简单的举几个 Loaders 使用例子：

- 可以把 SASS 文件的写法转换成 CSS，而不在使用其他转换工具。
- 可以把 ES6 或者 ES7 的代码，转换成大多浏览器兼容的 JS 代码。
- 可以把 React 中的 JSX 转换成 JavaScript 代码。

注意：所有的 Loaders 都需要在 npm 中单独进行安装，并在 webpack.config.js 里进行配置。下面我们对 Loaders 的配置型简单梳理一下。

- test：用于匹配处理文件的扩展名的表达式，这个选项是必须进行配置的；
- use：loader 名称，就是你要使用模块的名称，这个选项也必须进行配置，否则报错；
- include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
- query：为 loaders 提供额外的设置选项（可选）。

明白了 Loader 是什么后，就开始这节课的正题，如何打包 CSS 文件。

**打包 CSS 文件：**

建立 index.css 文件

要打包 CSS 你必须先要有个 CSS 文件，在/src 目录下，我们建立一个 css 文件夹，在文件夹里建立 index.css 文件。代码内容如下。

./src/css/index.css

body{    background-color: red;    color: white;}

CSS 文件建立好后，需要引入到入口文件中，才可以打包到，这里我们引入到 entry.js 中。

/src/entery.js 中在首行加入代码：

import i css from './css/index.css';

CSS 和引入做好后，我们就需要使用 loader 来解析 CSS 文件了，这里我们需要两个解析用的 loader，分别是 style-loader 和 css-loader。

**style-loader:**

它是用来处理 css 文件中的 url()等，npm 中的网址：https://www.npmjs.com/package/style-loader

用 npm install 进行项目安装：

npm install style-loader --save-dev

**css-loader：**

它是用来将 css 插入到页面的 style 标签。npm 中的网址：[https://www.npmjs.com/package/css-loader](https://www.npmjs.com/package/css-loader)

用 npm install 进行项目安装：

npm n install --save-dev css-loader

两个 loader 都下载安装好后，我们就可以配置我们 loaders 了。

**loaders 配置：**

修改 webpack.config.js 中 module 属性中的配置代码如下：

webpack.config.js

module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            }          \]    },

这个文件的详细讲解，我们在上面已经提及，如果你还是无法理解可以观看视频。

**总结：**

敲黑板，这节课的内容非常重要，上面的配置过程最好作两遍以上，完全了解后，再进行下节课的学习。loader 的使用也决定着你 webpack 水平的高低。所以一定要重视和练习。

## 第 06 节：插件配置：配置 JS 压缩

通过五节课的学习，我相信小伙伴已经对 Webpack 有所入门。这节课让我们初步了解插件（plugins\[ \]）的用法。在学习新知识之前，我先回答一个小伙伴提的问题，他的问题就是：“我看到别人写的 CSS 打包配置文件和你写的不一样，是不是有其他的写法？”

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**loader 的三种写法：**

上节课学习了如何把 CSS 文件进行打包到 JS 当中去，有小伙伴就提问，我看到别人的 CSS 打包的写法和你的写法不太一样，是不是他们写错了，loader 还有几种写法，这里我们就看两种另外的写法。

**第一种写法：直接用 use。**

module:{        rules:\[            {                test:/\\.css\$/,                use:\['style-loader','css-loader'\]            }        \]    },

**第二种写法：把 use 换成 loader。**

module:{        rules:\[            {                test:/\\.css\$/,                loader:\['style-loader','css-loader'\]            }        \]    },

**第三种写法：用 use+loader 的写法：**

module:{        rules:\[            {                test:/\\.css\$/,                use: \[                    {                        loader: "style-loader"                    }, {                        loader: "css-loader"                    }                \]            }        \]    },

由此看出，webpack 的扩展和灵活性是非常强的，你习惯于那种写法都可以。最重要的是，你看见别人项目的其他写法也不要慌张，自己去试一试，有可能就可以 Get 到新知识。

**压缩 JS 代码：**

现在你写的 JS 代码，在上线之前，都是需要进行压缩的，在没有 webpack 和 gulp 这些工具前，你可能需要找一个压缩软件或者在线进行压缩，在 Webpack 中可以很轻松的实现 JS 代码的压缩，它是通过插件的方式实现的，这里我们就先来引入一个 uglifyjs-webpack-plugin(JS 压缩插件，简称 uglify)。

**注意：**虽然 uglifyjs 是插件，但是 webpack 版本里默认已经集成，不需要再次安装。

**引入：**

我们需要在 webpack.config.js 中引入 uglifyjs-webpack-glugin 插件

const uglify = \`require\`('uglifyjs-webpack-plugin');

引入后在 plugins 配置里 new 一个 uglify 对象就可以了，代码如下。

plugins:\[        new uglify()    \],

这时候在终端中使用 webpack 进行打包，你会发现 JS 代码已经被压缩了。如果你用的 VSCode 的话，可以按 Alt+Z 让他文件自动换行，查看效果。

贴出通过 6 节课学习，现在 webpack.config.js 文件中的所有代码，这样大家可以对照学习。

const path=\`require\`('path');const uglify = \`require\`('uglifyjs-webpack-plugin');module.exports={    entry:{        entry:'./src/entry.js',        entry2:'./src/entry2.js'    },    output:{        path:path.resolve(\_\_dirname,'dist'),        filename:'\[name\].js'    },    module:{        rules:\[            {                test:/\\.css\$/,                use: \["style-loader", "css-loader"\]            }        \]    },    plugins:\[        new uglify()    \],    devServer:{       contentBase:path.resolve(\_\_dirname,'dist'),       host:'192.168.0.104',       compress:true,       port:1717    }}

## 第 07 节：插件配置：HTML 文件的发布

有经验的小伙伴其实一眼就可以看出，现在我们的项目结构是有问题的，我们把 index.html 直接放到了 dist 文件夹下，这肯定是不正确的，应该放到我们 src 目录下。但是前期我们为了循序渐进的学习，所以把 index.html 放到了 dist 目录下。这节课我们就学习如何把 html 文件打包到我们的生产路径下。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**devServer 和 JS 压缩的冲突**

上节课学习了 JS 压缩，在视频中我使用了 webpack 进行打包，而没有使用 npm run server 进行预览，也就是说没有启用 devServer 里的配置。那有些小伙伴在学习完视频后，在终端中输入了 npm run server 进行了预览，发现终端中报错了。

要弄明白这个问题，我们先要弄清楚什么是开发环境，什么是生产环境。开发环境中是基本不会对 js 进行压缩的，在开发预览时我们需要明确的报错行数和错误信息，所以完全没有必要压缩 JavasScript 代码。而生产环境中才会压缩 JS 代码，用于加快程序的工作效率。devServer 用于开发环境，而压缩 JS 用于生产环境，在开发环境中作生产环境的事情所以 Webpack 设置了冲突报错。

在实际开发中，webpack 配置文件是分开的，开发环境一个文件，生产环境一个文件。所以在讲课之前我并没有发现这个问题，感谢小伙伴提出的问题。如果你在学习过程中有任何疑问，欢迎在文章下方留言。

**打包 HTML 文件**

我们先把 dist 中的 html 文件剪切到 src 目录中，并去掉我们的 JS 引入代码（webpack 会自动为我们引入 JS），因为这才是我们真实工作的目录文件结构。

然后我们配置 webpack.config.js 文件，先引入我们的 html-webpack-plugin 插件。

const htmlPlugin= \`require\`('html-webpack-plugin');

引入后使用 npm 进行安装包。

npm install --save-dev html-webpack-plugin

最后在 webpack.config.js 里的 plugins 里进行插件配置，配置代码如下。

new htmlPlugin({            minify:{                removeAttributeQuotes:true            },            hash:true,            template:'./src/index.html'         })

- minify：是对 html 文件进行压缩，removeAttrubuteQuotes 是却掉属性的双引号。
- hash：为了开发中 js 有缓存效果，所以加入 hash，这样可以有效避免缓存 JS。
- template：是要打包的 html 模版路径和文件名称。

上边的都配置完成后，我们就可以在终端中使用 webpack，进行打包。你会看到 index.html 文件已经被打包到我们的 dist 目录下了，并且自动为我们引入了路口的 JS 文件。

**总结：**

html 文件的打包可以有效的区分开发目录和生产目录，在 webpack 的配置中也要搞清楚哪些配置用于生产环境，哪些配置用于开发环境，避免两种环境的配置冲突。

## 第 08 节：图片迈坑：CSS 中的图片处理

在学习 Webapck 过程中你可能遇到的第一个坑就是 CSS 中的图片处理。很多 webpack 新手都在图片的坑中无法自拔（有的小伙伴在开发环境中是可以找到图片的，但是一打包后就找不到图片了，有的小伙伴是不知道如何正确引入 html 或者 css 中的图片，导致程序出错），我们将用三节课时间搞彻底走出 webpack 图片的坑。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**图片写入 CSS**

你可以先在网上找一个图片，我这里就自恋的使用了我的头像，如果你需要下载，也可以下载（当然你可以完全自己找一个自己喜欢的）。

找到图片后在 src 目录下新建一个 images 文件夹，把图片放入 images 文件夹。

在 index.html 文件中增加一个放置 div 的标签（需要注意的是这里修改的是 src 下的 index.html 文件，不是 dist 下的，这点新手很容易弄混，要格外注意），代码如下。

<div id="tupian"></div>

编写 css 文件，把你用的图片作为背景显示。

#tupian{   background-image: url(../images/manhua.png);   width:466px;   height:453px;}

编写完成后，我们可以试着用 webpack 去打包一下。你会发现终端中是报错的，具体错误可以看下图。

**file-loader、url-loader**

上面的错误是由于缺少 loader 的解析，对 loader 其实我们并不陌生，因为前边已经学习了 CSS 打包的 loader。我们先安装两个解析图片用的 loader。

安装 file-loader 和 url-loader

npm install --save-dev file-loader url-loader

安装好后我们需要对两个 loader 进行基本的了解，学习尽量做到知其然知其所以然。

**file-loader：**解决引用路径的问题，拿 background 样式用 url 引入背景图来说，我们都知道，webpack 最终会将各个模块打包成一个文件，因此我们样式中的 url 路径是相对入口 html 页面的，而不是相对于原始 css 文件所在的路径的。这就会导致图片引入失败。这个问题是用 file-loader 解决的，file-loader 可以解析项目中的 url 引入（不仅限于 css），根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

**url-loader：**如果图片较多，会发很多 http 请求，会降低页面性能。这个问题可以通过 url-loader 解决。url-loader 会将引入的图片编码，生成 dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此 url-loader 提供了一个 limit 参数，小于 limit 字节的文件会被转为 DataURl，大于 limit 的还会使用 file-loader 进行 copy。

配置 url-loader

我们安装好后，就可以使用这个 loader 了，记得在 loader 使用时不需要用 require 引入，在 plugins 才需要使用 require 引入。

webpack.config.js 文件

//模块：例如解读 CSS,图片如何转换，压缩     module:{        rules: \[            {              test: /\\.css\$/,              use: \[ 'style-loader', 'css-loader' \]            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

- test:/.(png|jpg|gif)/是匹配图片文件后缀名称。
- use：是指定使用的 loader 和 loader 的配置参数。
- limit：是把小于 500000B 的文件打成 Base64 的格式，写入 JS。

写好后就可以使用 webpack 进行打包了，这回你会发现打包很顺利的完成了。具体的 Base64 的格式，你可以查看视频中的样子。

**为什么只使用了 url-loader**

有的小伙伴会发现我们并没有在 webpack.config.js 中使用 file-loader，但是依然打包成功了。我们需要了解 file-loader 和 url-loader 的关系。url-loader 和 file-loader 是什么关系呢？简答地说，url-loader 封装了 file-loader。url-loader 不依赖于 file-loader，即使用 url-loader 时，只需要安装 url-loader 即可，不需要安装 file-loader，因为 url-loader 内置了 file-loader。通过上面的介绍，我们可以看到，url-loader 工作分两种情况：

1.文件大小小于 limit 参数，url-loader 将会把文件转为 DataURL（Base64 格式）；

2.文件大小大于 limit，url-loader 会调用 file-loader 进行处理，参数也会直接传给 file-loader。

也就是说，其实我们只安装一个 url-loader 就可以了。但是为了以后的操作方便，我们这里就顺便安装上 file-loader。

## 第 09 节：图片迈坑：CSS 分离与图片路径处理

通过上节课的学习已经能把小图片打包成 Base64 格式，也对 webpack 对图片的打包有个基本了解。这节课主要学习两个知识：第一个是把 CSS 从 JavasScript 代码中分离出来，第二个是如何处理分离出来后 CSS 中的图片路径不对问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**CSS 分离:extract-text-webpack-plugin**

有些简单的交互页面中，你的 JavasScript 页面代码会非常少，而大部分代码都在 CSS 中，这时候项目组长会要求把 CSS 单独提取出来，方便以后更改。遇到这个需求你不要惊慌，已经有大神为我们准备好了对象的插件（plugin）。

extract-text-webpack-plugin

这个插件就可以完美的解决我们提取 CSS 的需求，但是 webpack 官方其实并不建议这样作，他们认为 CSS 就应该打包到 JavasScript 当中以减少 http 的请求数。但现实中的需求往往不是我们前端能控制的，有些需求是我们不能控制的，分离 CSS 就是这样一个既合理由不合理的需求。

**安装：**录制课程时的版本是 3.0.0 版本，直接使用 npm install 就可以安装。

npm install --save-dev extract-text-webpack-plugin

**引入：**安装完成后，需要先用 require 引入。

const extractTextPlugin = \`require\`("extract-text-webpack-plugin");

**设置 Plugins：**引入成功后需要在 plugins 属性中进行配置。这里只要 new 一下这个对象就可以了。

new extractTextPlugin("/css/index.css")

这里的/css/index.css 是分离后的路径位置。这部配置完成后，包装代码：还要修改原来我们的 style-loader 和 css-loader。

修改代码如下。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:500000                   }               }\]            }          \]    },

作完上边这四部后，就可以使用 webpack 进行打包了。

**图片路径问题：**

利用 extract-text-webpack-plugin 插件很轻松的就把 CSS 文件分离了出来，但是 CSS 路径并不正确，很多小伙伴就在这里搞个几天还是没有头绪，网上也给出了很多的解决方案，我觉的最好的解决方案是使用 publicPath 解决，我也一直在用。

publicPath：是在 webpack.config.js 文件的 output 选项中，主要作用就是处理静态文件路径的。

在处理前，我们在 webpack.config.js 上方声明一个对象，叫 website。

var website ={    publicPath:"http://192.168.1.108:1717/"}

注意，这里的 IP 和端口，是你本机的 ip 或者是你 devServer 配置的 IP 和端口。

然后在 output 选项中引用这个对象的 publicPath 属性。

//出口文件的配置项     output:{        //输出的路径，用了 Node 语法         path:path.resolve(\_\_dirname,'dist'),        //输出的文件名称         filename:'\[name\].js',        publicPath:website.publicPath    },

配置完成后，你再使用 webpack 命令进行打包，你会发现原来的相对路径改为了绝对路径，这样来讲速度更快。

**总结：**这节课我们实现了 CSS 的分离，并在分离后处理了图片路径不对的问题。处理路径的方法一定要充分理解，因为这在工作中经常用到。

## 第 10 节：图片迈坑：处理 HTML 中的图片

在 webpack 中是不喜欢你使用标签来引入图片的，但是我们作前端的人特别热衷于这种写法，国人也为此开发了一个：html-withimg-loader。他可以很好的处理我们在 html 中引入图片的问题。因为是国人开发的，文档都是中文，所以学习起来还是比较简单的。所以在学习新课之前我们先解决两个小伙伴的问题。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

只有项目安装 webpack，如何打包？ 有的小伙伴在学习视频时，并没有全局安装 webpack，而是使用了项目安装。首先我要说的是，这种做法是 webpack 推崇的，webpack 并不鼓励全局安装 webpack。但是小伙伴看我视频中直接在终端用 webpack 进行打包项目，他使用时会出现不是内部命令或者外部命令。

这时候需要配置 package.json 里的 scripts 选项，我们以前的课程已经学习了配置 webpack-dev-server 命令，在这个命令下面我们再加一个 build 命令进行打包项目使用。

"scripts": {    "server": "webpack-dev-server --open",    "build":"webpack"  },

配置完成后，可以在控制台输入 npm run build 进行打包。

**如何把图片放到指定的文件夹下**

前边两节课程，打包后的图片并没有放到 images 文件夹下，要放到 images 文件夹下，其实只需要配置我们的 url-loader 选项就可以了。

module:{        rules: \[            {              test: /\\.css\$/,              use: extractTextPlugin.extract({                fallback: "style-loader",                use: "css-loader"              })            },{               test:/\\.(png|jpg|gif)/ ,               use:\[{                   loader:'url-loader',                   options:{                       limit:5000,                       outputPath:'images/',                   }               }\]            }          \]    },

这回你再执行打包就可以把图片打包到 images 文件夹里了。

**html-withimg-loader**

html-withimg-loader 就是我们今天的重点了，这个插件并不是很火，也是我个人喜欢的一个小 loader。解决的问题就是在 hmtl 文件中引入标签的问题。

安装：

npm install html-withimg-loader --save

**配置 loader**

webpack.config.js

{    test: /\\.(htm|html)\$/i,     use:\[ 'html-withimg-loader'\] }

然后在终端中可以进行打包了。你会发现 images 被很好的打包了。并且路径也完全正确。

总结：我们通过三节课的时间讲了 webpack 图片中的坑，这些坑在我初学 webpack 初期给我带来了不少的麻烦，我也算是倾囊相教了，希望小伙伴们有所收获。在你工作中遇到图片的问题，也可以返回文章里进行对比查找问题。

## 第 11 节：CSS 进阶：Less 文件的打包和分离

第 05 节中已经讲过 CSS 文件的打包，后来又讲了 CSS 分离。这节我们讲解一下 Less 文件如何打包和分离。Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。也就是说 Less 给我们枯燥单一的样式文件加入了编程机制，这让我们这些前端程序员很受用，所以在工作中大部分程序员都使用了 Leess 开发。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**打包 Less 文件**

安装:

要使用 Less，我们要首先安装 Less 的服务，当然也是用 npm 来进行安装。

npm install --save-dev less

还需要安装 Less-loader 用来打包使用。

npm n install --save-dev less-loader

写 loader 配置：

安装好后，需要在 webpack.config.js 里编写 loader 配置，当然要想正确解析成 CSS，还是需要 style-loader 和 css-loader 的帮助，但是这两个 loader 前边已经讲过了，所以在这里就不重复了，如果你还对这两个 loader 不熟悉，那自行回去补前边的第五节吧。

webpack.config.js

{    test: /\\.less\$/,    use: \[{           loader: "style-loader" // creates style nodes from JS strings        }, {            loader: "css-loader" // translates CSS into CommonJS        , {            loader: "less-loader" // compiles Less to CSS        }\]}

**编写一个 less 文件**

现在 webpack 的配置好了，我们还需要编写一个 less 文件，这里明文为 black.less.里边只做一件是就是把一个层的背景设置成黑色。

black.less

@base :#000;#gogo{    width:300px;    height:300px;    background-color:@base;}

这里#gogo 是层的 ID 名称。@base 是我们设置的变量名称。

**引入到我们 entery.js 文件中**

import less from './css/black.less';

这样我们就可以把 less 文件进行打包了。我们可以使用 webpack 命令打包试一试。

**把 Lees 文件分离。**

我们之前讲了 extract-text-webpack-plugin 这个插件，想把 Less 文件分离出来的方法跟这个几乎一样，之前的我们在第 09 节中讲过，这里我们就只讲 less 的 loader 配置方法。（此处建议收看视频）

{            test: /\\.less\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "less-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

配置好后，你会发现 less 被分离到了 index.css 文件里。

总结：Less 是非常好的 CSS 扩展，但是 Less 得转换稍显麻烦，好的是 webpack 为我们提供了简单轻松的转换方法。希望小伙伴可以学好这一课，在你们的工作中都开始使用 Less 编写你们 css 代码。

## 第 12 节：CSS 进阶：SASS 文件的打包和分离

上节课学习了 Less 的打包和分离，群里使用 SASS 的小伙伴马上就不干了，要求讲一下 SASS 的配置，其实你会了 Less 得配置，SASS 的配置可以很轻松的学会，为了公平公正，那我们就用一节课的时间学一下 SASS 的配置的。

**安装 SASS 打包的 loader**

这里需要 在项目目录下用 npm 安装两个包。node-sass 和 sass-loader

node-sass：因为 sass-loader 依赖于 node-sass，所以需要先安装 node-sass

npm n install --save-dev node-sass

sass-loader:

npm install --save-dev sass-loader

**注意：**在用 npm 安装时，这个 loader 很容易安装失败，最好使用 cnpm 来进行安装。如果你安装一直报错，最好是把 node_modules 文件夹删除后，再重新安装。

编写 loader 配置

{                test: /\\.scss\$/,                use: \[{                    loader: "style-loader" // creates style nodes from JS strings                }, {                    loader: "css-loader" // translates CSS into CommonJS                }, {                    loader: "sass-loader" // compiles Sass to CSS                }\]}

**Sass 文件的编写**

写好 loader 配置后，就可以愉快的编写 sass 文件拉，但是不要忘记把 sass 文件引入到 entery.js 中。

$nav-color: #FFF;#nav {  $width: 100%;  width: $width;  height:30px;  background-color: $nav-color;}

都完成后，你就可以启动我们 npm run server 来查看效果了。

**把 SASS 文件分离。**

{            test: /\\.scss\$/,            use: extractTextPlugin.extract({                use: \[{                    loader: "css-loader"                }, {                    loader: "sass-loader"                }\],                // use style-loader in development                fallback: "style-loader"            }) }

这节课算是专门为 sass 使用者录制的吧，其实整体过程和 less 的使用差不多，希望你能在工作中开始使用 sass，并写出漂亮的 css 代码。

## 第 13 节：CSS 进阶：自动处理 CSS3 属性前缀

CSS3 已经成了前端的必会技能，但是你一定为那些属性需要加前缀，那些属性不需要加前缀而头疼。以前我在课程中讲过一个 can i use 的网站，可以查询这些，但是每次都查实在是编码效率太低了。这节课我们就学习一下如何通过 postcss-loader 给 css3 属性自动添加前缀。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**什么是属性前缀**

我们先来看一下代码：

-webkit-transform: rotate(45deg);        transform: rotate(45deg);

为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz 这些前缀。目的就是让我们写的页面在每个浏览器中都可以顺利运行。

**PostCSS**

PostCSS 是一个 CSS 的处理平台，它可以帮助你的 CSS 实现更多的功能，但是今天我们就通过其中的一个加前缀的功能，初步了解一下 PostCSS。

**安装**

需要安装两个包 postcss-loader 和 autoprefixer（自动添加前缀的插件）

npm install --save-dev postcss-loader autoprefixer

postcss.config.js

postCSS 推荐在项目根目录（和 webpack.config.js 同级），建立一个 postcss.config.js 文件。

postcss.config.js

module.exports = {    plugins: \[        require('autoprefixer')    \]}

这就是对 postCSS 一个简单的配置，引入了 autoprefixer 插件。让 postCSS 拥有添加前缀的能力，它会根据 can i use 来增加相应的 css3 属性前缀。

**编写 loader**

对 postcss.config.js 配置完成后，我们还需要编写我们的 loader 配置。

{      test: /\\.css\$/,      use: \[            {              loader: "style-loader"            }, {              loader: "css-loader",              options: {                 modules: true              }            }, {              loader: "postcss-loader"            }      \]}

**提取 CSS**

配置提取 CSS 的 loader 配置.

{    test: /\\.css\$/,    use: extractTextPlugin.extract({        fallback: 'style-loader',        use: \[            { loader: 'css-loader', options: { importLoaders: 1 } },            'postcss-loader'        \]    }) }

总结:postcss 还有很多功能，我希望小伙伴学会自学。这里给出 postcss-loader 的 github 地址：[https://github.com/postcss/postcss-loader](https://github.com/postcss/postcss-loader)

## 第 14 节：CSS 进阶：消除未使用的 CSS

像 Bootstrap 这样的框架往往会带有很多 CSS。在项目中通常我们只使用它的一小部分。就算我们自己写 CSS，随着项目的进展，CSS 也会越来越多，有时候需求更改，带来了 DOM 结构的更改，这时候我们可能无暇关注 CSS 样式，造成很多 CSS 的冗余。这节课就学习用 webpack 消除未使用的 CSS。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**PurifyCSS**

使用 PurifyCSS 可以大大减少 CSS 冗余，比如我们经常使用的 BootStrap(140KB)就可以减少到只有 35KB 大小。这在实际开发当中是非常有用的。

**安装 PurifyCSS-webpack**

从名字你就可以看出这是一个插件，而不是 loader。所以这个需要安装还需要引入。 PurifyCSS-webpack 要以来于 purify-css 这个包，所以这两个都需要安装。

npmn  i -D purifycss-webpack purify-css

这里的-D 代表的是–save-dev ,只是一个简写。

**引入 glob**

因为我们需要同步检查 html 模板，所以我们需要引入 node 的 glob 对象使用。在 webpack.config.js 文件头部引入 glob。

const glob = \`require\`('glob');

引入 purifycss-webpack

同样在 webpack.config.js 文件头部引入 purifycss-webpack

const PurifyCSSPlugin = \`require\`("purifycss-webpack");

**配置 plugins**

引入完成后我们需要在 webpack.config.js 里配置 plugins。代码如下，重点看标黄部分。

plugins:\[    //new uglify()     new htmlPlugin({        minify:{            removeAttrubuteQuotes:true        },        hash:true,        template:'./src/index.html'     }),    new extractTextPlugin("css/index.css"),    new PurifyCSSPlugin({        // Give paths to parse for rules. These should be absolute!        paths: glob.sync(path.join(\_\_dirname, 'src/\*.html')),        }) \]

这里配置了一个 paths，主要是需找 html 模板，purifycss 根据这个配置会遍历你的文件，查找哪些 css 被使用了。

**注意：**使用这个插件必须配合 extract-text-webpack-plugin 这个插件，这个插件在前边的课程已经讲解过了。如果你还不会请自学一下。

配置好上边的代码，我们可以故意在 css 文件里写一些用不到的属性，然后用 webpack 打包，你会发现没用的 CSS 已经自动给你删除掉了。在工作中记得一定要配置这个 plugins，因为这决定你代码的质量，非常有用。

## 第 15 节：给 webpack 增加 babel 支持

在前端开发中都开始使用 ES6 的语法了，虽然说 webpack3 增加了一些 ES6 的转换支持，但是实际效果不是很好，也可能是本人技术有限，没发挥出真正的功能。所以我在开发中还是喜欢添加 Babel-loader 的，我也查看了一些别人的 webpack 配置也都增加了 babel-loader，所以这节课我们学习一下如何增加 Babel 支持。（此节文章部分内容引用了 zhangwang 大神的文章内容）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

Babel 是什么？ Babel 其实是一个编译 JavaScript 的平台，它的强大之处表现在可以通过便宜帮你达到以下目的：

使用下一代的 javaScript 代码(ES6,ES7….)，即使这些标准目前并未被当前的浏览器完全支持。

使用基于 JavaScript 进行了扩展的语言，比如 React 的 JSX。

**Babel 的安装与配置**

Babel 其实是几个模块化的包，其核心功能位于称为 babel-core 的 npm 包中，webpack 可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析 ES6 的 babel-preset-es2015 包和解析 JSX 的 babel-preset-react 包）。

我们先一次性安装这些依赖包

cnpm c install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

在 webpack 中配置 Babel 的方法如下：

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',        options:{            presets:\[                "es2015","react"            \]        }    },    exclude:/node_modules/}

现在你已经可以用 webapck 转换 ES6 的语法兼容各个浏览器了，我们可以修改一下 entry.js 的代码如下：

import css from './css/index.css';{    let jspangString = 'Hello Webpack'    document.getElementById('title').innerHTML=jspangString; }

上面的代码使用了 ES6 的 let 声明方法。如果你不使用 Babel 来进行转换，你会发现打包出来的 js 代码没有作兼容处理，使用了 Babel 转换的代码是进行处理过的。

**.babelrc 配置**

虽然 Babel 可以直接在 webpack.config.js 中进行配置，但是考虑到 babel 具有非常多的配置选项，如果卸载 webapck.config.js 中会非常的雍长不可阅读，所以我们经常把配置卸载.babelrc 文件里。

在项目根目录新建.babelrc 文件，并把配置写到文件里。

.babelrc

{    "presets":\["react","es2015"\]}

.webpack.config.js 里的 loader 配置

{    test:/\\.(jsx|js)\$/,    use:{        loader:'babel-loader',    },    exclude:/node_modules/}

**ENV：**

现在网络上已经不流行 babel-preset-es2015，现在官方推荐使用的是 babel-preset-env,那我们为了紧跟潮流，我们在讲一下 env 的配置方法。

首先需要下载：

npm n install --save-dev babel-preset-env

然后修改.babelrc 里的配置文件。其实只要把之前的 es2015 换成 env 就可以了。

{    "presets":\["react","env"\]}

总结：对于在 React 中 Babel 的使用，如何解析 JSX，我会在后边的课程作详细了解，大家不要着急。在实际工作中还是要安装 Babel 的，这样能更好的兼容每种浏览器，而把 Babel 的配置文件分解出来是最好的选择。

## 第 16 节：打包后如何调试

作为一个程序员每天的大部分工作就是调试自己写的程序，那我们使用了 webpack 后，所以代码都打包到了一起，给调试带来了麻烦，但是 webpack 已经为我们充分考虑好了这点，它支持生产 Source Maps 来方便我们的调试。（敲黑板，这节可能偏理论一点。）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

在使用 webpack 时只要通过简单的 devtool 配置，webapck 就会自动给我们生产 source maps 文件，map 文件是一种对应编译文件和源文件的方法，让我们调试起来更简单。

四种选项

在配置 devtool 时，webpack 给我们提供了四种选项。

- source-map:在一个单独文件中产生一个完整且功能完全的文件。这个文件具有最好的 source map,但是它会减慢打包速度；
- cheap-module-source-map:在一个单独的文件中产生一个不带列映射的 map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号）,会对调试造成不便。
- eval-source-map:使用 eval 打包源文件模块，在同一个文件中生产干净的完整版的 sourcemap，但是对打包后输出的 JS 文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定要不开启这个选项。
- cheap-module-eval-source-map:这是在打包文件时最快的生产 source map 的方法，生产的 Source map 会和打包后的 JavaScript 文件同行显示，没有影射列，和 eval-source-map 选项具有相似的缺点。

四种打包模式，有上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的打包速度的后果就是对执行和调试有一定的影响。

个人意见是，如果大型项目可以使用 source-map，如果是中小型项目使用 eval-source-map 就完全可以应对，需要强调说明的是，source map 只适用于开发阶段，上线前记得修改这些调试设置。

简单的配置：

module.exports = {  devtool: 'eval-source-map',  entry:  \_\_dirname + "/app/main.js",  output: {    path: \_\_dirname + "/public",    filename: "bundle.js"  }}

总结：调试在开发中也是必不可少的，但是一定要记得在上线前一定要修改 webpack 配置，在打出上线包。

## 第 17 节：实战技巧：开发和生产并行设置

一周没有写博客了，这一周都在出差（10 月 9-10 月 12 日），肯定有小伙伴等着看教程了，在这里跟小伙伴说对不起了。这节详细讲讲用 webapck 开发和生产（或者说开发和上线）的那些事。把小伙伴容易迷茫的几个点讲清楚。（从这篇开始强烈建议看视频学习，文章很难表述我的意思）

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**依赖不同**

一个项目中是有开发环境和生产环境的，这两个环境的依赖也是不同的。

- 开发依赖：只在开发中用来帮助你进行开发，简化代码或者生成兼容设置的以来包。你可以打开 package.json 来查看，devDependencies 的下面的这些包为开发使用的包。这些包在生产环境中并没有用处。
- 生产依赖：就是比如我们的 js 使用了 jquery，jquery 的程序要在浏览器端起作用，也就是说我们最终的程序也需要这个包，这就是生产依赖。这些包在 dependencies 中。

npm 安装

假如我们要在项目中使用 jquery 库，这时候我们一般有三种安装方法，每种我都详细讲解一下。

**第一种：**

npm install jquery

安装完成后，你会发现在 package.json 中并不存在这个包的依赖。如果你项目拷贝给别人继续开发，或者别人和你 git 合作，再次下载项目 npm install 时就会缺少这个 jquery 包。项目就会无法正常运行，所以这也是我们最不赞成的安装方法。

**第二种：**

npm n install jquery --save

安装完成后，它存在于 package.json 的 dependencies 中，也就是说它是生产环境需要依赖的包（上线时需要的以来包）。

**第三种：**

npm install jquery --save-dev

安装完成后，它存在于 package.json 的 devDependencies 中，也就是说它是开发环境中需要的，上线并不需要这个包的依赖。

**安装全部项目依赖包：**

npm install

安装生产环境依赖包：

npm install --production

**配置生产和开发并行**

我们在以前的配置中设置了一个变量 website，用于静态资源正确找到路径。那如果生产环境和开发环境不一样，而且我们需要来回切换，这时候我们需要更好的设置方法。

var website={    publicPath:"http://192.168.0.104:1717/"}

**修改 package.json 命令**

其实就是添加一个 dev 设置，并通过环境变量来进行区分，下面是 package.json 里的值。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"set type=dev&webapck",    "build": "set type=build&webpack"  },

**修改 webpack.config.js 文件**

可以利用 node 的语法来读取 type 的值，然后根据 type 的值用 if–else 判断。

if(process.env.type== "build"){    var website={        publicPath:"http://192.168.0.104:1717/"    }}else{    var website={        publicPath:"http://cdn.jspang.com/"    }}

如果你说我想看一下传过来的值到底是什么？可以用下面的输出语句。

console.log( encodeURIComponent(process.env.type) );

**Mac 下的 package.json 设置**

MAC 电脑下需要把 set 换成 export，并且要多加一个&符，具体代码如下。

"scripts": {    "server": "webpack-dev-server --open",    "dev":"export type=dev&&webpack",    "build": "export type=build&&webpack"  },

## 第 18 节：实战技巧：webpack 模块化配置

现在的前端开发随着 ES6 的普及已经大面积使用模块化进行开发了，那在 webpack.config.js 配置文件中，如何进行模块化开发那？例如把开发环境的写到一个模块中，把生产环境的写到一个模块中。这节课我们就用一节课的时间学习一下 webpack 模块化配置的技巧。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**JS 中的模块化实现**

先来看一下 JavaScript 如何实现模块话开发。其实很多小伙伴都会这种操作，那我们就当复习了，再预习一遍知识。看下面 ES6 中的模块化代码。

function jspang(){    alert('jspang.com:'+'webpack');}module.exports=jspang;

上面的代码是一个最简单的 es6 模块化写法，我们声明了一个 jspang 方法，并且把这个方法用 module.exports 进行暴露出去。然后我们在入口文件中用 import 进行引入，并进行使用。

import jspang from './jspang.js';jspang();

我们了解如何作 Javascript 的模块化后，其实 webpack 的模块化和上边的过程很类似。

**webpack 模块**

为了让大家容易看懂，我把 webpack.config.js 中的 entry 入口文件进行模块化设置，单独拿出来制作成一个模块。

首先在根目录，新建一个 webpack_config 文件夹，然后新建 entry_webpack.js 文件，代码如下：

entry_webpack.js

//声明 entry 变量 const entry ={};  //声明路径属性 entry.path={    entry:'./src/entry.js'  }//进行模块化 module.exports =entry;

配置的模块化代码编写好以后，需要在 webpack.config.js 中引入，注意这里的引入只能使用 require 的方法。

const entry = require("./webpack_config/entry_webpack.js")

然后在入口文件部分，修改成如下代码：

entry:entry.path,

这时候你可以再次使用 npm run dev 进行测试，你会发现模块化成功了。

**总结：**模块化在实际工作中是必不可少的操作，但是现在的 webpack 教程还很少讲到，大家一定要重视这节，因为如果你搞不清这节的内容，可能你看别人的配置也会看不明白。记得一定要动手练习操作，否则你下面的课程也没办法学习。

## 第 19 节：实战技巧：优雅打包第三方类库

在工作中引用第三方的框架是必不可少的，比如引入 JQuery 或者 Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用 webpack 引入第三方库。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**引入 JQuery**

其实引用第三方库的方法有很多种，但是有些并不是很优雅，还有些方法会出现打包问题，技术胖在这里介绍一下自己工作中引入第三方模块的方法，我们就拿 JQuery 为例。小伙伴们要举一反三，学会后试着自己引入 Vue 试试。

安装 JQuery

npm install --save jquery

安装时需要注意的时 Jquery 最终要在生产环境中使用，所以我们这里要使用–save 进行安装。

**修改 entry.js 文件**

安装好后，还需要引入到我们的 entry.js 中，这里直接使用 import 进行引入就可以。

import \$ from 'jquery';

这里引入是不需要我们写相对路径的，因为 jquery 的包是在 node_modules 里的，只要写一个包名 jquery，系统会自动为我们查找的。

引入好后我们就可以在 entry.js 里使用 jquery，我们可以加入下面的代码，然后进行测试。

\$('#title').html('Hello JSpang');

可以看到上面是标准的 jquery 代码，你可以使用 npm run server 进行测试，现在代码顺利运行了，这说明我们引用的 JQuery 库成功了。需要说的是你不仅可以在入口中进行引入，你还可以在任何你需要的 js 中引入，webpack 并不会重复打包，它只给我们打包一次。

**用 plugin 引入**

如果你觉的上面的方法和 webpack 没什么关系，只是普通的引入，webpack 只是负责了一下打包，这样并没有全局感。那再学习一种在 webapck.config.js 中配置的方法，这种不需要你在入口文件中引入，而是 webpack 给你作了全局引入。这个插件就是 ProvidePlugin。

ProvidePlugin 是一个 webpack 自带的插件，Provide 的意思就是装备、提供。因为 ProvidePlugin 是 webpack 自带的插件，所以要先再 webpack.config.js 中引入 webpack。

constc  webpack = require('webpack');

在 webpack.config.js 里引入必须使用 require，否则会报错的，这点小伙伴们一定要注意。

引入成功后配置我们的 plugins 模块，代码如下。

plugins:\[    new webpack.ProvidePlugin({        \$:"jquery"    })\],

配置好后，就可以在你的入口文件中使用了，而不用再次引入了。这是一种全局的引入，在实际工作中也可以很好的规范项目所使用的第三方库。

**总结：**每一个项目都可能引入第三方类库，而像 Vue 和 Angular 这样的成熟框架都推出了自己的 webpack 框架，比如 vue-cli。但是很多情况还是需要我们手动更改这些配置好的 webpack 来适用于我们的公司项目，所以这节课的知识也是在工作中经常使用的，希望小伙伴们一定要重视并进行练习。

## 第 20 节：实战技巧：watch 的正确使用方法

初级开发阶段，使用 webpack-dev-server 就可以充当服务器和完成打包任务，但时随着你项目的进一步完成，可能需要前后台联调或者两个前端合并代码时，就需要一个公共的服务器了。这时候我们每次保存后手动打包显然效率太低，我们希望的场景是代码发生变化后，只要保存，webpack 自动为我们进行打包。这个工具就是 watch，这节课我们把 wacht 完全学会，你会发现在开发中更加的得心应手。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**watch 的配置**

很多小伙伴认为–warch 直接使用就可以，并没有什么需要讲的。其实这只是初级的用法，但是在学习一种技术时，我们必须要做到了解全部，也就是常说的知其然知其所以然。我们看下面的配置代码，我在代码中已经做出了解释。

watchOptions:{    //检测修改的时间，以毫秒为单位     poll:1000,     //防止重复保存而发生重复编译错误。这里设置的 500 是半秒内重复保存，不进行打包操作     aggregateTimeout:500,     //不监听的目录     ignored:/node_modules/, }

上边的每一行配置我都作了说明，有时候你在没配置的情况下，直接用 webpack –watch 是不起作用的，这时候你需要进行配置这些选项。

配置好后，我们就可以痛快的使用 watch 了，在大型项目中，这大大加快了我们的开发效率，不用反复的手动打包了。

**BannerPlugin 插件**

由于这节课的内容太少了，我们再讲一个工作中的小技巧，再工作中每个人写的代码都要写上备注，为的就是在发生问题时可以找到当时写代码的人。有时候也用于版权声明。

这个插件就是 BannerPlugin，我们使用后会在 JS 中加上我们的版权或开发者声明。

new webpack.BannerPlugin('JSPang 版权所有，看官方免费视频到 jspang.com 收看')

需要注意的是在使用这个插件之前必须引入 webpack。

const webpack = require('webpack');

这时在 dist 目录下的 entery.js 已经加上了版权声明。

## 第 21 节：实战技巧：webpack 优化黑技能

作为一个程序员，无论是写什么程序都 i 要有一颗不断优化的心。webpack 在优化这条路上，也为我们作了很多配置，这节课我们就看看工作中常用的 webpack 优化黑技能。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

**ProvidePlugin 和 import**

在第 19 节中学习了如何引入第三方类库，并引入了 jquery，在引用 JQuery 时我们用了两种方法，第一种时 import，第二种时使用 ProvidePlugin 插件。那两种引入方法有什么区别那?

- import 引入方法：引用后不管你在代码中使用不适用该类库，都会把该类库打包起来，这样有时就会让代码产生冗余。
- ProvidePlugin 引入方法：引用后只有在类库使用时，才按需进行打包，所以建议在工作使用插件的方式进行引入。 具体的对比操作，会在视频中演示，你会看出两种引入方法的对比打包结果。差距还是蛮大的。

**抽离 JQuery**

上边的方法只是优化的第一步，工作中你会发现，不适用的类库几乎我们也不会引入，所以上边只是一个必要操作的第一步。那往往把第三方类库抽离出来，才是最好的解决方法。

**第一步：修改入口文件**

抽离的第一步是修改入口文件，把我们的 JQuery 也加入到入口文件中，看下面的代码。

webpack.config.js

entry:{        entry:'./src/entry.js',        jquery:'jquery' },

**第二步：引入插件**

我们需要引入 optimize 优化插件，插件里边是需要配置的，具体配置项看下面的代码。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:'jquery',    //把文件打包到哪里，是一个路径     filename:"assets/js/jquery.min.js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

minChunks 一般都是固定配置，但是不写是不行的，你会打包失败。

filename 是可以省略的，这是直接打包到了打包根目录下，我们这里直接打包到了 dist 文件夹下边。

配置完成后，我们可以先删掉以前打包的 dist 目录，然后用 webpack 再次打包，你会发现 jquery 被抽离了出来，并且我们的 entry.js 文件变的很小。

**多个第三方类库抽离**

会了如何抽离 Jquery，但是在实际开发中，我们会引用不止一个第三方类库，这时也需要抽离。我们拿引入 Vue 为例，看看如何抽离出来。

第一步:我们先用 npm 进行安装。

npm instawll vue --save

注意这里是–save，而不是–save-dev。因为这个类库在生产环境中也是要使用的。

第二步：在入口配置中引入 vue 和 jquery

entry:{    entry:'./src/entry.js',    jquery:'jquery',    vue:'vue'},

只是多比上边多加了一个 vue 选项。

第三步：修改 CommonsChunkPlugin 配置

需要修改两个位置：

- 第一个是在 name 属性里把原来的字符串改为数组，因为我们要引入多个模块，所以是数组；
- 第二个是在 filename 属性中把我们输出的文件名改为匹配付\[name\],这项操作就是打包出来的名字跟随我们打包前的模块。

下面是我们修改的代码，你可以跟 jquery 抽离时对比一下。

new webpack.optimize.CommonsChunkPlugin({    //name 对应入口文件中的名字，我们起的是 jQuery    name:\['jquery','vue'\],    //把文件打包到哪里，是一个路径     filename:"assets/js/\[name\].js",    //最小打包的文件模块数，这里直接写 2 就好     minChunks:2}),

配置好后，我们就可以在控制台输入 webpack 进行打包了。你会看到我们预想的结果，jquery 和 vue 都被我们抽离出来了。

**总结：**在项目开发中，我们很使用很多第三方类库，那好的做法就是把第三方这些类库全部抽离处理，这样在项目维护和性能上都是不错的选择。希望学会这个技巧后，你也能在工作中使用上。

## 第 22 节：实战技巧：静态资源集中输出

工作中会有一些已经存在但在项目中没有引用的图片资源或者其他静态资源（比如设计图、开发文档），这些静态资源有可能是文档，也有可能是一些额外的图片。项目组长会要求你打包时保留这些静态资源，直接打包到制定文件夹。其实打包这些资源只需要用到 copy-webpack-plugin。

视频教程购买地址：[https://www.edurt.com/my/course/167](https://www.edurt.com/my/course/167)

使用 copy-webpack-plugin copy-webpack-plugin 就是专门为我们作静态资源转移的插件，不过它不同上两节使用的插件，它是需要安装的。

**插件安装**

插件的安装只要使用 npm 就可以了。

cnpm c install --save-dev copy-webpack-plugin

如果在安装过程中出错，你可以使用 npm 来进行安装。

**引入插件**

安装好后，需要在 webpack.config.js 文件的头部引入这个插件才可以使用。

constc  copyWebpackPlugin= require("copy-webpack-plugin");

**配置插件**

引入之后我们就可以在 plugins 里边进行配置插件了，我们先看下面的插件配置代码，然后再进行详细讲解。

new copyWebpackPlugin(\[{        from:\_\_dirname+'/src/public',        to:'./public'    }\])

- from:要打包的静态资源目录地址，这里的\_\_dirname 是指项目目录下，是 node 的一种语法，可以直接定位到本机的项目目录中。
- to:要打包到的文件夹路径，跟随 output 配置中的目录。所以不需要再自己加\_\_dirname。

配置好后，我们就可以使用 webpack 进行打包了，你会发现图片按照我们的配置打包了过去。

*总结：*你是不是觉的学习起来越来越容易了，因为你经过 20 多节课的学习，已经基本掌握了 webpack 的知识，剩下的就是不断练习和在实际项目中发现新的需求，然后找到新的 loader 或者 pulgin 来解决你的问题。

## 第 23 节：实战技巧：Json 配置文件使用

在实际工作中，我们的项目都会配置一个 Json 的文件或者说 API 文件，作为项目的配置文件。有时候你也会从后台读取到一个 json 的文件，这节课就学习如何在 webpack 环境中使用 Json。如果你会 webpack1 或者 webpack2 版本中，你是需要加载一个 json-loader 的 loader 进来的，但是在 webpack3.x 版本中，你不再需要另外引入了。

**读出 Json 内容**

第一步：现在我们的 index.html 模板中加入一个层，并给层一个 Id，为了是在 javascript 代码中可以方便引用。

<div id="json"></div>

第二步：到 src 文件夹下，找到入口文件，我这里是 entry.js 文件。修改里边的代码，如下：

var json =require('../config.json');document.getElementById("json").innerHTML= json.name;

这两行代码非常简单，第一行是引入我们的 json 文件，第二行驶写入到到 DOM 中。

第三步：启用我们的 npm run server 命令就可以在浏览器中看到结果了。

**说说热更新**

其实在 webpack3 中启用热加载相当的容易，只要加入 HotModuleReplacementPlugin 这个插件就可以了。

new webpack.HotModuleReplacementPlugin()

现在只要你启动 npm run server 后，修改 index.html 中的内容，浏览器可以自动给我们更新出最新的页面。

但这里说的热加更新和我们平时写程序的热加载不是一回事，比如说我们 Vue 或者 React 中的热更新，并不是刷新整个页面，而是一个局部更新，而这里的更新是重新刷新了页面。

这点小伙伴们要搞清楚。

**总结：**这节主要回答了两个同学的问题，这两个问题在实际开发中也经常用到，所以我就总结成课，给小伙伴们讲解一下，希望对你们有所帮助。
