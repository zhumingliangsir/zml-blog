# 1、注释

```md
[//]: # "哈哈我是最强注释，不会在浏览器中显示。"

[^_^]: # (哈哈我是最萌注释，不会在浏览器中显示。)

[//]: <> (哈哈我是注释，不会在浏览器中显示。)

[comment]: <> (哈哈我是注释，不会在浏览器中显示。)
```

[//]: # "哈哈我是最强注释，不会在浏览器中显示。"

[^_^]: # (哈哈我是最萌注释，不会在浏览器中显示。)

[//]: <> (哈哈我是注释，不会在浏览器中显示。)

[comment]: <> (哈哈我是注释，不会在浏览器中显示。)

# 2、标题

```md
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题 <!--最多6级标题-->
```

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题 <!--最多6级标题-->

# 3、任务列表

```md
- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`
```

- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`

# 4、缩进

```md
【1】 &emsp;或&#8195; //全角  
【2】 &ensp;或&#8194; //半角  
【3】 &nbsp;或&#160; //半角之半角
```

【1】 &emsp;或&#8195; //全角  
【2】 &ensp;或&#8194; //半角  
【3】 &nbsp;或&#160; //半角之半角

# 5、字体

```md
_斜体_
_斜体_  
**粗体**  
**_加粗斜体_**  
~~删除线~~  
++下划线++  
==背景高亮==
```

_斜体_
_斜体_  
**粗体**  
**_加粗斜体_**  
~~删除线~~  
++下划线++  
==背景高亮==

# 6、超链接

1、`[]`里写链接文字，`()`里写链接地址  
2、 `()`中的""中可以为链接指定 `title` `属性，title` 属性可加可不加  
3、`title` 属性的效果是鼠标悬停在链接上会出现指定的 `title` 文字，链接地址与 `title` 前有一个`空格`

```md
欢迎阅读 [择势勤](https://www.jianshu.com/u/16d77399d3a7 "可以点击哦")
```

欢迎阅读 [择势勤](https://www.jianshu.com/u/16d77399d3a7 "可以点击哦")

# 7、对齐方式

```html
<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>
```

<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>

# 8、参考式

```md
我经常去的几个网站[Google][1]、[Leanote][2]。

[1]: http://www.google.com
[2]: http://www.leanote.com
```

我经常去的几个网站[Google][1]、[Leanote][2]。

[1]: http://www.google.com
[2]: http://www.leanote.com

# 9、注脚

```md
使用 Markdown[^1]可以效率的书写文档[^2],

[^1]: Markdown 是一种纯文本标记语言
[^2]: Markdown 是一种纯文本标记语言
```

使用 Markdown[^1]可以效率的书写文档[^2],

[^1]: Markdown 是一种纯文本标记语言
[^2]: Markdown 是一种纯文本标记语言

# 10、自动链接

```md
&lt;http://example.com/&gt; &emsp;&emsp;  
&lt;address@example.com&gt;  
<http://www.baidu.com>
```

&lt;http://example.com/&gt; &emsp;&emsp;  
&lt;address@example.com&gt;  
<http://www.baidu.com>

# 11、无序列表、有序列表、定义型列表

```md
- 无序列表项 一

* 无序列表项 二

- 无序列表项 三

1. 有序列表项 一
2. 有序列表项 二
3. 有序列表项 三

: 轻量级文本标记语言（左侧有一个可见的冒号和四个不可见的空格）
```

- 无序列表项 一

* 无序列表项 二

- 无序列表项 三

1. 有序列表项 一
2. 有序列表项 二
3. 有序列表项 三

: 轻量级文本标记语言（左侧有一个可见的冒号和四个不可见的空格）

# 12、插入图像

```html
<center>
  <!--开始居中对齐-->

  ![加载失败](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4002468578,4166080564&fm=26&gp=0.jpg
  "图片Title")
</center>
<!--结束居中对齐-->
```

<center>  <!--开始居中对齐-->

![图片加载失败](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4002468578,4166080564&fm=26&gp=0.jpg "图片Title")

</center> <!--结束居中对齐-->

# 13、多级引用

```md
> > > 请问 Markdwon 怎么用？ - 小白  
> > > 自己看教程！ - 愤青  
> > > 教程在哪？ - 小白
```

> > > 请问 Markdwon 怎么用？ - 小白  
> > > 自己看教程！ - 愤青  
> > > 教程在哪？ - 小白

# 14、字体

```md
<font face="黑体">我是黑体字</font>  
<font face="微软雅黑">我是微软雅黑</font>  
<font face="STCAIYUN">我是华文彩云</font>  
<font color=#0099ff size=12 face="黑体">黑体</font>  
<font color=gray size=5>gray</font>  
<font color=#00ffff size=3>null</font>
```

<font face="黑体">我是黑体字</font>  
<font face="微软雅黑">我是微软雅黑</font>  
<font face="STCAIYUN">我是华文彩云</font>  
<font color=#0099ff size=12 face="黑体">黑体</font>  
<font color=gray size=5>gray</font>  
<font color=#00ffff size=3>null</font>

# 15、代码块

```md
C 语言里的函数 `scanf()` 怎么使用？
```

C 语言里的函数 `scanf()` 怎么使用？

````md
```js
function getData() {
  console.log("data");
}
getData();
```
````

````
```js
function getData() {
  console.log("data");
}
getData();
````

````md
```javascript {.line-numbers}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
```
````

````
```javascript {.line-numbers}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
````

```javascript {highlight=5}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
```

```javascript {highlight=5-8}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
```

```javascript {highlight=[1-5,8,10-12]}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
```

```javascript {.line-numbers,highlight=5}
function add1(x, y) {
  return x + y
}
function add2x, y) {
  return x + y
}
function add3(x, y) {
  return x + y
}
```

# 16、表格

```md
| 学号   | 姓名 | 序号 | 年级   |
| ------ | ---- | ---- | ------ |
| 小明明 | 男   | 5    | 三年级 |
| 小红   | 女   | 79   | 三年级 |
| 小陆   | 男   | 192  | 三年级 |
```

| 学号   | 姓名 | 序号 | 年级   |
| ------ | ---- | ---- | ------ |
| 小明明 | 男   | 5    | 三年级 |
| 小红   | 女   | 79   | 三年级 |
| 小陆   | 男   | 192  | 三年级 |

# 17、分隔线
```md
* * *
***
*****
- - -
-----------

```
---

---

---

---

---
