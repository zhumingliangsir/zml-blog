---
title: 基础类型
---

## 1-布尔值

::: tip 关于

- 只有两个值：`true`和`false`

```js
let isDone: boolean = false;
```

:::

## 2-数字

::: tip 关于

- 和 JavaScript 一样，TypeScript 里的`所有数字`都是浮点数。
- 支持`十进制`和`十六进制`，`二进制`和`八进制`

```js
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

:::

## 3-字符串

::: tip 关于

- 可以使用双引号`（ "）`或单引号`（'）`或`模版字符串`表示字符串

```js
let name: string = "bob";
name = "smith";
```

```js
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.

I'll be ${age + 1} years old next month.`;
```

:::

## 4-数组

::: tip 关于

- 有两种方式可以定义数组
- 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组

```js
let list: number[] = [1, 2, 3];
```

- 第二种方式是使用`数组泛型`，Array<元素类型>：

```js
let list: Array<number> = [1, 2, 3];
```

:::

## 5-元组(Tuple)

::: tip 关于

- 已知元素数量和元素类型的类数组
- 各元素的类型不必相同

```js
// 声明一个元组类型
let x: [string, number];
// 初始化
x = ["hello", 10]; // OK
// 初始化错误
x = [10, "hello"]; // Error
```

- 访问

```js
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

- 当访问一个越界的元素，会使用联合类型替代

```js
x[3] = "world"; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

:::

## 6-枚举

::: tip 关于

- enum 类型是对 JavaScript 标准数据类型的一个补充。
- 像 C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```js
// 默认情况下，从0开始为元素编号
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // 1
```

- 手动赋值

```js
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green; // 2
```

- 或者

```js
enum Color {Red = 1, Green = 5, Blue}
let c: Color = Color.Blue; // 6
```

:::

## 7-Any

::: tip 关于

- 不清楚类型的变量指定一个类型,可以使用 any 类型来标记这些变量

```js
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

- 这里，我们先声明了一个类型为 `any` 的 notSure 字段，初始化值为 `number` 类型的 `4`
- 接下来，通过手动将其改变为`字符串`类型，这是被允许的
- 最后我们再次更改 notSure 的值为`布尔类型`的 `false`
- 以上的赋值方式都是 ok 的，因为它是 `any`

```js
// 拓展（）
let list: any[] = [1, true, "free"];

list[1] = 100;
```

- 或者

```js
enum Color {Red = 1, Green = 5, Blue}
let c: Color = Color.Blue; // 6
```

:::

## 8-Void

::: tip 关于

- void 类型像是与 any 类型相反，它表示没有任何类型。
- 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

```js
function warnUser(): void {
  console.log("This is my warning message");
}
```

- 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：

```js
let unusable1: void = undefined;
let unusable2: void = null：;
```

- 或者

```js
enum Color {Red = 1, Green = 5, Blue}
let c: Color = Color.Blue; // 6
```

:::

## 9-Null 和 Undefined

::: tip 关于

- null 的类型为 null void 类似（用处不大）
- undefined 的类型为 undefined void 类似（用处不大）

```js
// 除此之外，我们无法给这些变量赋值!
let u: undefined = undefined;
let n: null = null;
```

- 默认情况下 `null` 和 `undefined` 是`所有类型的子类型`。 就是说你可以把 null 和 undefined 赋值给 其他 类型的变量。
- 例如

```js
let name: string = "koma";
name = undefined;

let age: number = 23;
age = null;
```

- 然而，当你指定了`--strictNullChecks`标记，
- `null和undefined只能赋值给void和它们各自`
- 这能避免 很多常见的问题。
- 也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 string | null | undefined。 再次说明，稍后我们会介绍联合类型。
- 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的

```js
enum Color {Red = 1, Green = 5, Blue}
let c: Color = Color.Blue; // 6
```

:::

## 10-Never

::: tip 关于

- `never` 类型表示的是那些永不存在的值的类型
- 例如， `never` 类型是那些 `总是会抛出异常` 或 `根本就不会有返回值` 的函数表达式或箭头函数表达式的返回值类型
- 下面是一些返回 never 类型的函数

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

- `never` 类型是 `任何类型` 的子类型，也可以赋值给 `任何类型`；
- 然而，没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了 never 本身之外）。
- 即使 `any` 也不可以赋值给 `never`

<!-- ```js
let name: string = "paul";
name:never =
``` -->

:::

## 11-Object

::: tip 关于

- object 表示非原始类型，
- 也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。

使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：

```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

:::

## 类型断言

::: tip 关于

- 告诉编译器，“相信我，我知道自己在干什么”
- 类型断言有两种形式。 其一是“尖括号”语法：

```js
/*
- 首先，我们声明了一个类型为 any 的变量 someValue
*/
let someValue: any = "this is a string";
/*
- 接着，我们通过变量 strLength 读取 someValue 的 length，
*/
let strLength: number = (<string>someValue).length;
/*
如果 someValue 为 number 类型，
我们都知道 number 类型不存在 length 属性，此时编译器可能会报错，
因此我们通过类型断言，
告诉编译器，这个 someValue 就是字符串，这样编译器就不会报错了
*/

```

- 另一个为 as 语法：

```js
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

::: warning 注意
两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。
:::

## 总结

::: danger 特别声明

- 数据类型这个模块还算简单，简单过一下基本就可以 GET 到了，本文编写参考了官网等素材，纯属学习记录之用，不喜勿喷哈
  :::
