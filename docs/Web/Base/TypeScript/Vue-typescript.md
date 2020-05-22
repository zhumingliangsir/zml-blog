---
title: Vue+Typescript 实战
---

## 什么是 typescript？

::: warning 关于

- 1、`Typescript` 是 `Javascript` 的强类型版本。然后在编译期间去掉类型和特有语法，生成纯粹的 `JavaScript` 代码。由于最终在浏览器中运行的仍然是 `JavaScript`，所以 `TypeScript` 并不依赖于浏览器的支持，也并不会带来兼容性问题。

- 2、`TypeScript` 是 `JavaScript` 的超集，这意味着它支持所有的 `JavaScript` 语法。并在此之上对 `JavaScript` 添加了一些扩展，如 `class / interface / module` 等。这样会大大提升代码的可阅读性。

- 3、与此同时，`TypeScript` 也是 `JavaScript ES6` 的超集，**_Google_** 的 **_Angular 2.0_** 也宣布采用 `TypeScript` 进行开发。这更是充分说明了这是一门面向未来并且脚踏实地的语言
  :::

## 起手 vue-cli

```md
# 首先 npm 安装 vue-cli3.0

npm install -g @vue/cli

# 创建一个项目

vue create hello-ts
或者
vue ui

# 根据自己的需求选择配置项

空格键是否选中，上下选择
······
一路回车，等待依赖下载完毕…

# 下载完毕，启动项目

cd hello-ts
npm run serve
```

## vue config 文件配置

```js
// vue.config.js
module.exports = {
  // 选项...
  // 当使用基于  HTML 5 history.pushState 的路由时；
  // 当使用 pages 选项构建多页面应用时。
  baseUrl: "",
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: "webApp",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "assets",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,
  // 多页面
  pages: undefined,
  // 编译警告
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。eg:"vuex-persist"
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
  integrity: false,
  // 反向代理
  devServer: {
    open: true,
    port: 8008,
    proxy: {
      "/api": {
        // target: "http://192.168.162.126:8083", //后端服务器地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
```

## 让 ts 识别.vue

- 由于 `TypeScript` 默认并不支持 `*.vue` 后缀的文件，所以在 `shims-vue.d.ts` 文件中需要配置：

```js
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

```

::: warning 代码解读
意思是告诉 `TypeScript` `\*.vue` 后缀的文件可以交给 `vue` 模块来处理。

而在代码中导入 `_.vue` 文件的时候，**必须**需要写上 `.vue` 后缀。原因还是因为 `TypeScript` 默认只识别 `_.ts` 文件，不识别 `\*.vue` 文件：

```js
// 此时的.vue后缀是必须的，必须的，必须的
import Component from "components/component.vue";
```

:::

## 改造 .vue 文件

- 在这之前先让我们了解一下所需要的插件（就是下面使用的`@`符号,属于 es7 的装饰器, ）

## vue-class-component

- **vue-class-component** 对 Vue 组件进行了一层封装，让 Vue 组件语法在结合了 TypeScript 语法之后更加扁平化：

```js
<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  // 初始化数据
  count = 123;
  // 继承属性
  @Prop() private msg!: string;
  // 声明周期钩子
  mounted() {
    this.handleClick();
  }
  // 获取计算属性
  get computedMsg() {
    return "computed" + this.count;
  }
  // 设置计算属性
  set computedMsg(val) {
    console.log(val);
  }
  // 方法
  handleClick() {
    console.log("hello: " + this.count);
  }
}
</script>
```

- **上面的代码的作用相当于下面的代码：**

```js
export default {
  data () {
    return {
      msg: 123
    }
  }

  // 声明周期钩子
  mounted () {
    this.handleClick()
  }

  // 计算属性
  computed: {
    computedMsg () {
        get:function(){
			return 'computed ' + this.msg;
        },
		set:function(val){
			console.log(val)
		}
    }
  }

  // 方法
  methods: {
    handleClick () {
      alert('hello: ' + this.msg)
    }
  }
}
```

## vue-property-decorator

- `vue-property-decorator` 是在 `vue-class-component` 上增强了更多的结合 `Vue` 特性的装饰器，新增了这 7 个`装饰器`：

```md
@Emit
@Inject
@Model
@Prop
@Provide
@Watch
@Component (从 vue-class-component 继承)
```

- 在这里列举几个常用的`@Prop/@Watch/@Component`, 更多信息，详见[官方文档](https://github.com/kaorun343/vue-property-decorator)

```js
import {
  Component,
  Prop,
  Vue,
  Watch,
  Provide,
  Inject
} from "vue-property-decorator";

@Component
export class MyComponent extends Vue {
  //父子组件之间传值
  @Prop({ default: "default value" })
  propB: string;

  @Prop([String, Boolean])
  propC: string | boolean;

  //监听数据变化
  @Watch("child")
  onChildChanged(val: string, oldVal: string) {}

  @Watch("person", { immediate: true, deep: true })
  onPersonChanged(val: string, oldVal: string) {}

  //提供
  //父
  @Provide("users")
  users = [{ name: "test", id: 0 }];

  //注入
  //子
  @Inject("users") users;
}
```

- 上面的代码的作用相当于下面的代码：

```js
export default {
  props: {
    propB: {
      type: String,
      default: 'default value'
    },
    propC: [String, Boolean],
  }
  methods: {
    onChildChanged(val, oldVal) { }
  },
  watch: {
    'child': {
      handler: 'onChildChanged',
      //当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。
      immediate: true,
      // 深度监听:当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
      deep: true
    }
  }
}
```

## 使用 vuex

- 使用方式 `vuex-class`
- 获取：`@State`、`@Getter`、`@Action`、`@Mutation`

<div style="text-align:center">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/typescript/ts_vuex.png"/>
  </div>

## 踩坑记

## 让 vue 识别全局方法/变量

- 我们经常在 main.ts 中给 vue.prototype 挂载实例或者内容，以方便在组件里面使用。

```js
import baseURL from "@/api/api";
# 其他页面在使用 $baseUrl 的时候直接  this.$baseUrl 就可以了
Vue.prototype.$baseUrl = baseURL.baseURL;
```

- 然而当你在组件中直接 this.$baseUrl 时会报错的，那是因为 $baseUrl 属性，并没有在 vue 实例中声明。

- 报错示例如下：

  <div style="text-align:center">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/typescript/ts_$baseUrl.png"/>
  </div>

- 想要以上做法都正常执行，就还要补充如下内容：
- 在 `src` 下的 `shims-vue.d.ts` 中加入要挂载的内容。 表示 `vue` 里面的 `this` 下有这些东西。

      <div style="text-align:center">
        <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/typescript/ts_declare.png"/>
      </div>

  ## 装饰器 @Component

  ```js
  <script lang="ts">
    import {(Vue, Component)} from "vue-property-decorator"; export default
    class index extends Vue {}
  </script>
  ```

  - 这样写是报错的，以下才是正确写法（因为这里的 Vue 是从 vue-property-decorator import 来的）：

  ```js
  <script lang="ts">
    import {(Vue, Component)} from "vue-property-decorator"; @Component export
    default class index extends Vue {}
  </script>
  ```

## IE 浏览器访问报错缺少”)”

<div style="text-align:center">
        <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/typescript/ie_error.jpg"/>
      </div>

- 猜测是 `Es6` 语法的问题，经查看错误信息，发现引入的某个包是用 Es6 实现的，`babel` 没办法转 `node_modules` 里面的代码，如果我们想要通过 `babel` 显式转译一个依赖，可以在这个选项中列出来。

```md
# 目前为止发现通过 Es6 实现的依赖包有：

transpileDependencies: ['resize-detector','vuex-persist']
```

::: warning 总结

- `ts` 从数据类型、结构入手，通过`静态类型`检测来增强你代码的健壮性，从而避免 bug 的产生。

- 同时可以继续使用 `.vue` 单文件

:::
