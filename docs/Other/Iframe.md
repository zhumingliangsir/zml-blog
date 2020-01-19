---
title: iframe 动态设置高度
---

::: warning 温馨提示
前端小伙伴对 `iframe` 这个标签都很熟悉，同时我们也知道，`iframe` 可以设置 `width` 属性，但是无法设置 `height`，在这里我们介绍了如何动态设置高度
:::

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div style="width: 100%;height: 100%;background: #f60"></div>
    <iframe
      src="http://www.taobao.com"
      width="100%"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
      scrolling="yes"
      allowtransparency="yes"
    ></iframe>
    <script>
      // 找到iframe节点
      let iframe = document.getElementsByTagName("iframe")[0];
      // 动态设置height属性
      iframe.onload = _ => {
        iframe.setAttribute("height", document.documentElement.clientHeight);
      };
      // 设置监听
      window.addEventListener("resize", _ => {
        iframe.onload();
      });
    </script>
  </body>
</html>
```
