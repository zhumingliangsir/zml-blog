---
title: 装饰器
---

## 介绍

::: tip 关于

- 装饰器就是一种特殊类型的声明，本质上就是一个方法，可以注入到类、方法、属性、参数上，扩展其功能；
- 常见的装饰器：`类装饰器`、`属性装饰器`、`方法装饰器`、`参数装饰器`...
- 装饰器在写法上有：`普通装饰器`(无法传参)、`装饰器工厂`(可传参)
- 装饰器已是 ES7 的标准特性之一，是过去几年 JS 最大的成就之一！
- 执行顺序：
- 属性装饰器 > 方法装饰器 > 参数装饰器 > 类装饰器
- 由下往上依次执行

:::

## 普通装饰器

::: tip 介绍
就是一个普通函数

```ts
function get(target: any) {
  // 此时的target就是被装饰的Data类
  console.log(target);
}
```

:::

## 装饰器工厂

::: tip 介绍
本质上是一个闭包

```ts
function say(params: string) {
  console.log("params:", params); //params: hello
  return function (target: any) {
    console.log("target:", target); //target: class Data
    target.prototype.id = params; //扩展一个id属性
  };
}
```

:::

## 1-普通类装饰器

```js
function get(target: any) {
  // 此时的target就是被装饰的Data类
  console.log(target);
}
@get
class Data {
  constructor() {}
}
```

拓展 Data 类的属性和方法

```js
function get(target: any) {
  // 此时的params就是被装饰的Data类
  console.log(target);
  // 扩展属性
  target.prototype.name = "koma";
  target.prototype.go = function () {
    console.log("我是go go go");
  };
}
@get
class Data {
  constructor() {}
}
```

:::

## 2-类装饰器工厂

::: tip
可以传参，本质上就是一个闭包

```ts
function say(params: string) {
  console.log("params:", params); //params: hello
  return function (target: any) {
    console.log("target:", target); //target: class Data
    target.prototype.id = params; //扩展一个id属性
  };
}
@say("hello")
class Data {
  constructor() {}
}
var data: any = new Data();
console.log(data.id); //hello
```

注意，当使用装饰器工厂时，如果参数为可选参数，使用是，小括号也不能省略
例如：

```ts
function getData(params?: string) {
  return function (target: any) {};
}

@getData()
class Data {
  constructor() {}
}
```

:::

## 3-属性装饰器

::: tip
属性装饰器表达式会在运行时当作函数被调用，传入两个参数：

- 参数一：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
- 参数二：成员的名字；

```js

function logProp(params:any) {
    return function(target:any, attr:any) {
        console.log(target)  // 原型对象：{ constructor:f, getData:f }
        console.log(attr)  // 属性名称；url
        target[attr] = params;  //通过原型对象修改属性值 = 装饰器传入的参数
        target.api = 'xxxxx';  //扩展属性
        target.run = function() {  //扩展方法
            console.log('run...');
        }
    }
}
class HttpClient {
    @logProp('http://baidu.com')
    public url:any|undefined;
    constructor() { }
    getData() {
        console.log(this.url);
    }
}
var http:any = new HttpClient();
http.getData();  // http://baidu.com
console.log(http.api);  // xxxxx
http.run();  // run...
```

:::

## 4-方法装饰器

::: tip 介绍

方法装饰器被应用到方法的属性描述符上，可以用来监视、修改、替换方法的定义；
方法装饰器会在运行时传入 3 个参数：

- 参数 1：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
- 参数 2：成员的名字；
- 参数 3：成员的属性描述符；

```ts
function get(params: any) {
  console.log(params); // 装饰器传入的参数：http://baidu.com
  return function (target: any, methodName: any, desc: any) {
    console.log(target); // { constructor:f, getData:f }
    console.log(methodName); // getData
    console.log(desc); // {value: ƒ, writable: true, enumerable: false, configurable: true} value就是方法体
    /* 修改被装饰的方法 */
    //1. 保存原方法体
    var oldMethod = desc.value;
    //2. 重新定义方法体
    desc.value = function (...args: any[]) {
      //3. 把传入的数组元素都转为字符串
      let newArgs = args.map((item) => {
        return String(item);
      });
      //4. 执行原来的方法体
      oldMethod.apply(this, newArgs);
      // 等效于 oldMethod.call(this, ...newArgs);
    };
  };
}
class HttpClient {
  constructor() {}
  @get("http://baidu.com")
  getData(...args: any[]) {
    console.log("getData: ", args);
  }
}
var http = new HttpClient();
http.getData(1, 2, true); // getData: ["1", "2", "true"]
```

:::

## 5-方法参数装饰器

::: tip 介绍
参数装饰器表达式会在运行时被调用，可以为类的原型增加一些元素数据，传入 3 个参数：

- 参数 1：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
- 参数 2：方法名称；
- 参数 3：参数在函数参数列表中的索引；

```ts
function logParams(params: any) {
  console.log(params); // 装饰器传入的参数：uuid
  return function (target: any, methodName: any, paramIndex: any) {
    console.log(target); // { constructor:f, getData:f }
    console.log(methodName); // getData
    console.log(paramIndex); // 0
  };
}
class HttpClient {
  constructor() {}
  getData(@logParams("uuid") uuid: any) {
    console.log(uuid);
  }
}
```

:::

## 装饰器的执行顺序

::: tip 介绍
1-装饰器组合

- TS 支持多个装饰器同时装饰到一个声明上，语法支持从左到右，或从上到下书写；

```ts
@f @g x

@f
@g
x
```

2-在 TypeScript 里，当多个装饰器应用在一个声明上时会进行如下步骤的操作

- 由上至下依次对装饰器表达式求值;
- 求值的结果会被当作函数，由下至上依次调用.

3-不同装饰器的执行顺序：

- 属性装饰器 > 方法装饰器 > 参数装饰器 > 类装饰器

```ts
function logClz11(params: string) {
  return function (target: any) {
    console.log("logClz11");//6
  };
}
function logClz22(params?: string) {
  return function (target: any) {
    console.log("logClz22");//5
  };
}
function logAttr(params?: string) {
  return function (target: any, attrName: any) {
    console.log("logAttr"); //1
  };
}
function logMethod(params?: string) {
  return function (target: any, methodName: any, desc: any) {
    console.log("logMethod");//2
  };
}
function logParam11(params?: any) {
  return function (target: any, methodName: any, paramIndex: any) {
    console.log("logParam11");//4
  };
}
function logParam22(params?: any) {
  return function (target: any, methodName: any, paramIndex: any) {
    console.log("logParam22");//3
  };
}

@logClz11("http://baidu.com")
@logClz22()
class HttpClient {
  @logAttr()
  public url: string | undefined;

  constructor() {}

  @logMethod()
  getData() {
    console.log("get data");
  }

  setData(@logParam11() param1: any, @logParam22() param2: any) {
    console.log("set data");
  }
}
// logAttr --> logMethod --> logParam22 --> logParam11 --> logClz22 --> logClz11
```

:::
