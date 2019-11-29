---
title: 实践篇
---

## 环境搭建

- 1、Node.js
- 2、react-native-cli（npm i react-native-cli -g）
- 3、python2（应用于命令行的输出打印，React Native 不支持 3.x）
- 4、配置 java 运行环境（java / javac）
- 5、安装 IOS 开发工具 XCode/android 和 Android 开发工具 Android studio(科学上网)
- 6、Watchman（监视文件系统变更的工具，可以捕获变化，实时更新）

## 技术依赖

- 1、ES6
- 2、React
- 3、Jsx
- 4、原生开发

## 创建工程

- 1、react-native init yourProjectName --verbose --version 0.55.4

- ex：react-native init yourProjectName （vue create hello-vue）

- react-native init yourProjectName：初始化一个 RN 项目

- --verbose：设置初始化时显示详情，比如安装了什么模块，进度如何等等

- --version 0.55.4：设置构建应用程序的 RN 版本

- 2、cd HelloReactNative

- 3、react-native run-ios（npm start /npm run dev / npm run serve）

- 4、react-native run-android（npm start /npm run dev / npm run serve）

  - 项目效果：
  - 待添加

## 开发四部曲

#### html(结构层) / css（表现层） / js （行为层）ajax （通信层）

#### vue：

- html ----- element-ui (el-table / el-input )
- css ----- css (sass / less /stylus)
- js ----- js(nextTick / this.\$set.... )
- ajax ----- axios

#### React-Native:

- html ----- react-native 组件 (View / Text / Image / TextInput )
- css ----- css (StyleSheet 创建 flex 布局)
- js ----- js （this.setState / this.props ）
- ajax ----- fetch

## React-Native 开发规范

#### 结构层：

- 一个 RN 组件（js）,必须要实现一个 <a>render</a> 方法，render 方法必须要返回 <a>jsx</a> 元素，jsx 元素必须有且只有一个父元素
  （render 方法会把创建的组件（vnode）、转化为真实的 DOM 元素）

- 注意：
- 1、文件名: 使用驼峰命名法且首字母大写，如 HomeView.js
- 2、扩展名:使用.js 作为 js 文件的扩展名。如果同一个文件夹下有同名而不同作用的 js 文件，则通过中缀（小写）进一步区分，例如：HomeView.component.js,HomeView.style.js,HomeView.action.js 等
- 3、组件命名: 与文件名（除中缀外）完全一致。如果组件单独放置在目录中，则目录名也一致

```js
ex：import Footer from './Component/Footer/Footer'

// 此时组件名为Footer，而不再是index
```

- 4、所有文本必须包裹在 Text 标签内

  ```js
  <el-button>123</el-button>

  // 在vue中我们只需要在el-button中将文本写入即可
  ```

  ```js
  <View>
    <Text>123</Text>
  </View>

  // 但是在RN中我们需要用Text标签进行包裹
  ```

- 5、有且只有一个父元素

#### 表现层：

```js
// 方式1：
<View style={{ backgroundColor:"#f00", width: "100%" }} />

// 方式2：
<View style={styles.container}></View>

// 方式3：
<View style={style.container, { flex: 1, width: "100%" }} />

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

```

#### 注意：

- 1、驼峰式命名法
- 2、React-Native 的布局是完全是用 flex 来实现,display：flex
- 3、React-Native 中的 flex 的相关属性不是完全依照 w3c 规范提供的各种值
- ex:RN 中 flexDirection 默认是 column
- 4、属性取值基本就两种：数值和字符串，
- ex:数值类如 width 的写法是 width:200,不能带单位‘px’
- 5、组件默认宽度为 100%
- 6、不支持 box-shadow
- 7、React-Native 的样式基本上是实现了 CSS 的一个子集，并且属性名不完全一致。

#### 行为层：

- 1、采用函数式变成思想
- 2、注意 this 指向

#### 通讯层：

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">官网地址</a>
