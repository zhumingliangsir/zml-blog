---
title: react-native webview使用
---

> 2019/10/14

> [引用](https://juejin.im/post/59907802f265da3e327eec02)

## 前言

今天碰到个需求,有个页面需要后台可富文本编辑,找了社区一些 html 渲染的插件,但是发现网页 css 无法渲染,而我也并没有那么多时间和精力和能力去写 css 的轮子,真是头疼,但是借助 webview 就没有这种烦恼了,而且还有一些优点,更改起来不需要重新打包,对于一些特殊页面来说很不错的了

另外其中又陆陆续续碰到一些问题,如果把请求放到网页里,又会遇到身份认证的问题,而且项目涉及多语言,发送请求还需要告知服务端客户端正在使用的语言,RN 跟 webview 调试是真的麻烦,没有 console 如何调试接口数据呢

最终解决方案:最后决定在 RN 中请求 html 片段,这样多语言跟身份认证就没问题了(如果将这些发送到网页感觉有安全风险,以及真的不好调试,没有 console),获取到 html,与 webview 通信时发送过去即可,再加入到 body 根结点

## 使用

- webview 已经迁移到 react-native-webview 库中

- 属性

  1. automaticallyAdjustContentInsets 控制是否调整放置在导航条、标签栏或工具栏后面的 web 视图的内容。默认值为 true

  2. contentInset {top: number, left: number, bottom: number, right: number} 设置网页内嵌边距

  3. injectedJavaScript 设置在网页加载之前注入一段 js 代码

  4. mediaPlaybackRequiresUserAction 设置页面中的 HTML5 音视频是否需要在用户点击后再开始播放。默认值为 true

  5. scalesPageToFit 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例。

  6. source 在 WebView 中指定加载内容 html 或者 url,可以指定 header,method 等

  7. startInLoadingState 强制 WebView 在第一次加载时先显示 loading 视图。默认为 true

  8. domStorageEnabled（android） 布尔值,指定是否开启 DOM 本地存储

  9. javaScriptEnabled（android 布尔值,指定 WebView 中是否启用 JavaScript。只在 Android 上使用，因为在 iOS 上默认启用了 JavaScript。

  10. mixedContentMode(android) 指定混合内容模式。即 WebView 是否应该允许安全链接（https）页面中加载非安全链接（http）的内容,

  'never' (默认) - WebView 不允许安全链接页面中加载非安全链接的内容
  'always' - WebView 允许安全链接页面中加载非安全链接的内容。
  'compatibility' - WebView 会尽量和浏览器当前对待此情况的行为一致

  11. userAgent(android) 为 WebView 设置 user-agent 字符串标识。这一字符串也可以在原生端用 WebViewConfig 来设置，但 js 端的设置会覆盖原生端的设置。

  12. allowsInlineMediaPlayback（ios） 指定 HTML5 视频是在网页当前位置播放还是使用原生的全屏播放器播放。 默认值为 false,视频在网页播放还需要设置 webkit-playsinline

  13. bounces(ios) 指定滑动到边缘后是否有回弹效果。

  14. decelerationRate（ios） 指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。也可以指定预设的字符串值，如"normal"和"fast"，

  15. scrollEnabled（ios） 是否启用滚动

- 方法

  1. onNavigationStateChange:当导航状态发生变化的时候调用。
  2. onLoadStart:当网页开始加载的时候调用。
  3. onError:当网页加载失败的时候调用。
  4. onLoad:当网页加载结束的时候调用。
  5. onLoadEnd:当网页加载结束调用，不管是成功还是失败。
  6. renderLoading:WebView 组件正在渲染页面时触发的函数，只有 startInLoadingState 为 true 时该函数才起作用。
  7. renderError:监听渲染页面出错的函数。
  8. onShouldStartLoadWithRequest（仅 iOS）:该方法允许拦截 WebView 加载的 URL 地址，进行自定义处理。该方法通过返回 true 或者 falase 来决定是否继续加载该拦截到请求。
  9. onMessage:在 webView 内部网页中，调用 window.postMessage 可以触发此属性对应的函数，通过 event.nativeEvent.data 获取接收到的数据，实现网页和 RN 之间的数据传递
  10. injectJavaScript（function）:函数接受一个字符串，该字符串将传递给 WebView，并立即执行为 JavaScript。

- hooks 中,ref 可用 useRef 存储

```js
//举个例子
...
const webview = useRef()
...
<WebView
  source={{ uri: 'http://127.0.0.1' }}
  ref={webview}
  onLoadEnd={() => webview.current.postMessage(data)}
  style={{ backgroundColor: 'rgba(0,0,0,0)' }}
  renderLoading={() => <View style={{ backgroundColor: 'rgba(0,0,0,0)' }} />} // 设置空View，修复ioswebview闪白
/>
```

我需要在 webview 加载完成后传输 html 到 webview,因此在 onLoadEnd 中做操作

## 小问题

- android 深色背景在 webview 加载时闪白屏

```js
//给webview加上透明style
style={{backgroundColor:'rgba(0,0,0,0)'}}
```

- webview 在暗色系背景下，ios 加载会出现白色遮罩闪烁

```js
//将renderLoading改成空View
renderLoading={<View style={{backgroundColor:'rgba(0,0,0,0)'}}/>}
```
