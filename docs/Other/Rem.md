---
title: REM的那些事儿
---

### Rem

:::warning 注意
`element.addEventListener(event,fn,useCaption );`

默认值是 `false`，即冒泡传递。

当值为 `true`，就是捕获传递。
:::

#### 方法 1：

```js
windows.onload = function() {
  setRemSize();
  window.addEventListener("resize", setRemSize, false);
  function setRemSize() {
    var _clientWidth = document.documentElement.clientWidth / 19.2 + "px";
    document.documentElement.style.fontSize = _clientWidth;
  }
};
```

#### 方法 2:

```js
(function(win, doc) {
  var rem = doc.documentElement.clientWidth / 19.2;
  doc.documentElement.style.fontSize = rem + "px";
  win.addEventListener(
    "resize",
    function() {
      rem = doc.documentElement.clientWidth / 19.2;
      doc.documentElement.style.fontSize = rem + "px";
      console.log(rem);
    },
    false
  );
})(window, document);
```

#### 方法 3:

```js
window.onload = function() {
  /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
     为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
  getRem(720, 100);
};
window.onresize = function() {
  getRem(720, 100);
};
function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
```
