---
title: 接口
---

## 1-关于

::: tip

- 对于前端程序猿来讲，一听见接口，可能就会想起那些 "万恶" 的后台，往往彼之的那个接口并没有想象般美好，
- 常见的表现为答非所问，没有约定，没有规则，问题百出
- 纵眼观前端，其实也亦然，封装一个组件，方法，不同的人去使用，总是会出现前期百怪的问题，参数不统一，类型不统一，总是达不到预期的效果
- 别怕，它来了，它来了，TS 带着接口走了
-
- 总结：
- 接口就是是对值所具有的结构进行类型检查，我要什么，你就必须给什么
- 当然也不一定，但前提一定是符合约定

:::

## 2-初探

::: tip 关于

-废话真多^\_^，来，先看个例子吧

```js
// 1、声明接口
// 通过interface关键字，声明一个Person的接口
interface Person {
  name: string;
  age: number;
}
/* 2、使用接口 */
function printPersonInfo(info: Person): void {
  console.log(`姓名：${info.name},年龄：${info.age}`);
}

/* 3、校验 */
let xiaoMing = { age: 23, name: "koma" }; //不会去检查属性的顺序,存在即合理
printPersonInfo(xiaoMing);
```

:::

## 3-可选属性

::: tip 关于

- 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在

```js
interface Point {
  readonly x: number;
  readonly y: number;
}
```

- 你可以通过赋值一个对象字面量来构造一个 Point。 赋值后， x 和 y 再也不能被改变了。

```js
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

- TypeScript 具有 `ReadonlyArray<T>`类型，它与 `Array<T>`相似，
- 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

:::

## 4-readonly vs const

::: tip 关于

最简单判断该用 `readonly` 还是 `const` 的方法是看要把它做为变量使用还是做为一个属性。
做为`变量使用`的话用 `const`，若`做为属性`则使用 `readonly`

:::

## 5-额外的属性检查

::: tip 关于

- 正常来讲，你必须按照接口定义的规范去使用
- 否则就会失败

```js
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  // ...
}
/* 
注意：
这里我们传了width属性和background属性，
background并没有存在于SquareConfig接口中
 */
let mySquare = createSquare({ background: "red", width: 100 });
// 你会得到一个错误
// error: 'background' not expected in type 'SquareConfig'
```

- 难道没有办法了，非也非也
- 我们可以使用类型断言，绕开这些检查

```js
let mySquare = createSquare({ width: 100, background: 0.5 } as SquareConfig);
```

- 当然，这也不是最佳的解决方式
- 这里我们推荐添加一个 `字符串索引签名`,前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性
- 例如这样

```js
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100, name: "koma", age: 23 };
let mySquare = createSquare(squareOptions); // ok
```

:::

## 6-函数类型

::: tip
废话不多讲，直接上代码

```js
/* 
1、声明了一个函数类型的SearchFunc接口
2、参数两个，均为string，返回值为布尔类型

 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

使用

```js
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

:::

## 7-可索引的类型

::: tip
废话不多讲，直接上代码

```js
/* 
1、声明了一个函数类型的StringArray接口
2、索引为数字，值为string

 */
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

使用

```js
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
```

- TypeScript 支持两种索引签名：字符串和数字
- 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串
- 这是因为当使用 number 来索引时，JavaScript 会将它转换成 string 然后再去索引对象。
- 也就是说用 100（一个 number）去索引等同于使用"100"（一个 string）去索引，因此两者需要保持一致。

```js
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}
```

:::

## 8-类类型

::: tip
实现接口

与 C#或 Java 里接口的基本作用一样，TypeScript 也能够用它来明确的`强制`一个类去符合某种契约。

```js
// 声明一个接口
interface ClockInterface {
  currentTime: Date;
}

// 声明一个Clock类去实现ClockInterface接口
// implements是实现的意思
class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}
```

- 你也可以在接口中描述一个方法，在类里实现它，如同下面的 setTime 方法一样：

```js
// 接口ClockInterface中定义了setTime方法
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
// 在Clock类中，必须要去实现setTime方法，否则会报错
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

:::

## 9-继承接口

::: tip

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```js
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

```

一个接口可以继承多个接口，创建出多个接口的合成接口。

```js
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

:::

## 10-混合类型

::: tip

```js
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

:::

## 11-接口继承类

::: tip
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
接口同样会继承到类的 private 和 protected 成员。
这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
这个接口类型只能被这个类或其子类所实现（implement）。

```js
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```

在上面的例子里，SelectableControl 包含了 Control 的所有成员，包括私有成员 state。 因为 state 是私有成员，所以只能够是 Control 的子类们才能实现 SelectableControl 接口。 因为只有 Control 的子类才能够拥有一个声明于 Control 的私有成员 state，这对私有成员的兼容性是必需的。

在 Control 类内部，是允许通过 SelectableControl 的实例来访问私有成员 state 的。 实际上， SelectableControl 接口和拥有 select 方法的 Control 类是一样的。 Button 和 TextBox 类是 SelectableControl 的子类（因为它们都继承自 Control 并有 select 方法），但 Image 和 Location 类并不是这样的。
:::
