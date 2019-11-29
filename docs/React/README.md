---
title: React-ts-Antd集成方案
---

## 相关依赖

-   先安装相关依赖

```Shell
#在项目下生成依赖文件
npm init -y

#通过yarn管理我们的依赖
npm i yarn -g

#安装开发依赖包
#webpack
yarn add webpack webpack-dev-server webpack-cli typescript --dev

#类型声明包
yarn add @types/react @types/react-dom --dev

#依赖
yarn react react-dom

#HtmlWebpackPlugin简化了HTML文件的创建，以便为你的webpack包提供服务,对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用
yarn add HtmlWebpackPlugin --dev

#awesome-typescript-loader 编译ts文件
yarn add awesome-typescript-loader --dev

#ts-import-plugin模块化导入插件，这里我配置一下antd组件库按需加载
yarn add ts-import-plugin --dev

#从javascript中提取资源映射,传递给webpack,在webpack配置文件中配置devtool开启,主要是解决我们开发代码与实际运行代码不一致的问题
yarn add source-map-loader --dev

#每次编译都通过哈说值生成了新的压缩文件,因此我们需要配置这个来清理dist文件夹
yarn add clean-webpack-plugin --dev
```

## 配置

-   在项目根目录新建文件 webpack.config.js，webpack 相关配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
	mode: 'development', //"production" | "development" | "none"
	entry: './src/index.tsx', //入口文件
	output: {
		filename: 'bundle.[hash].js', //文件名
		path: path.resolve(__dirname, '/dist'), //输出文件路径(绝对路径)
		sourceMapFilename: '[name].js.map',
		publicPath: '/',
	},
	devtool: 'source-map',
	module: {
		//模块配置
		rules: [
			//模块规则
			//编译ts、tsx文件
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				options: {
					getCustomTransformers: () => ({
						before: [
							tsImportPluginFactory({
								//配置antd组件库按需加载
								libraryName: 'antd',
								libraryDirectory: 'lib',
								style: 'css',
							}),
						],
					}),
				},
				exclude: /node_modules/,
			},
			//这几个都是css,loader
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
			//这个file-loader，暂时不用就去掉吧
			{
				test: /\.(jpg|png|svg|ico|icns)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				},
			},
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
		],
	},
	devServer: {
		inline: true, //默认情况下，应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
		open: true, //告诉 dev-server 在 server 启动后打开浏览器
		hot: true, //启动热更新
		overlay: {
			//当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
			errors: true,
		},
		historyApiFallback: true, //任意的 404 响应都可能需要被替代为 index.html
		//跨域处理
		proxy: {
			'/api/*': {
				target: 'http://127.0.0.1',
				secure: false,
				changeOrigin: true,
			},
		},
	},
	//路径映射，让我们跨文件夹导入资源更方便简洁，ts项目需要配置两处：tsconfig.json路径映射以及webpack

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@component': path.resolve(__dirname, './src/component'),
			'@page': path.resolve(__dirname, './src/page'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [
		//插件配置
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'index.html',
			appMountId: 'app',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
			},
		}),
	],
};
```

-   ts 配置文件:在根目录下新建 tsconfig.json

```json
{
	"compilerOptions": {
		"outDir": "./dist/", //输出路径
		"noImplicitAny": true,
		"module": "ESNext",
		"target": "es5",
		"jsx": "react", // 在 .tsx文件里支持JSX： "React"或 "Preserve"。
		"sourceMap": true, //开启ts文件sourceMap
		"allowJs": true, //允许编译js
		"allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
		"moduleResolution": "node",
		"experimentalDecorators": true, // 启用实验性的ES装饰器。
		"lib": ["es2015", "es2017", "dom"],
		"baseUrl": ".", // 解析非相对模块名的基准目录。
		"paths": {
			//路径映射配置,跟webpack中的路径映射对应起来
			"@component/*": ["src/component/*"],
			"@page/*": ["src/page/*"],
			"@utils/*": ["src/utils/*"]
		}
	},
	"include": [
		//指定编译
		"src/**/*"
	],
	"exclude": [
		//忽略指定文件
		"node_modules"
	]
}
```

-   babel 配置文件:根目录下新建.babelrc,我发现集成 ts 后直接将 ts 编译成 js,并没有使用到 babel 了,这个文件也没怎么研究,在另一篇 react-native 中会详细解释

```json
{
	"presets": ["env", "react"],
	"env": {
		"development": {}
	}
}
```

-   使用 vscode，安装 prettier,eslint 插件,让我们开发更 爽

    1.根目录新建.prettierrc，详细参数信息大家看看官网吧,这里我就不过多解释了

```json
{
	"singleQuote": true,
	"trailingComma": "es5",
	"printWidth": 100,
	"overrides": [
		{
			"files": ".prettierrc",
			"options": { "parser": "json" }
		}
	]
}
```

## 项目结构

-   这里未做过深的研究,先让自己能写写 demo

<div style="text-align: center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/React/react-web-structure.png"/>
</div>

-   src 目录存放我们的源代码,index.tsx 为我们的入口文件，router 路由配置，page 页面代码，component 公共组件.......

```js
//index.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Router from './router';

ReactDOM.render(<Router />, document.getElementById('app'));
```

```js
//router/index.tsx
import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from '@page/index';
import User from '@page/user';
const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/xjq" component={User} />
			</Switch>
		</BrowserRouter>
	);
};
export default Router;
```

-   yarn start 启动项目看看效果吧
