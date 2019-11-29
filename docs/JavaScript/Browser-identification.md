---
title: 手机浏览器识别
---

## 安卓

- 大部分安卓可以通过判断有没有 Android 识别

```js
let u = navigator.userAgent;
let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
```

然而小米内置浏览器不行(米粉才能发现的 bug)

```js
//小米
let u = navigator.userAgent;
let isXiaomi = /MiuiBrowser/gi.test(u);
```

- 微信浏览器判断

```js
let ua = navigator.userAgent.toLowerCase();
let isWeixin = /micromessenger/.test(ua);
```

## ios 平台

- Safari 有 Safari 且没有 Chrome,qq 浏览器好像不服...

```js
/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
```

- mac

```js
/Mac OS X/.test(navigator.userAgent);
```

- iPhone、iPad

```js
/iPhone/.test(navigator.userAgent);
/iPad/.test(navigator.userAgent);
```
