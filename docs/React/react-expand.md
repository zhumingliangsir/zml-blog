---
title: React营养快餐
---

## 关于 KEY

- Keys 可以在 DOM 中的某些元素被`增加`或`删除`的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个`确定的标识`

```js
// 最好是这个元素在列表中拥有的一个独一无二的字符串
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => (
  <li key={number.toString()}>{number}</li>
));
```

```js
// 通常，我们使用数据中的 id 来作为元素的 key
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>);
```

#### 例子：不正确的使用 key 的方式

```js
function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要在这里指定 key：
    <li key={value.toString()}>{value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    // 错误！元素的 key 应该在这里指定：
    <ListItem value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

#### 例子：正确的使用 key 的方式

```js
function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

::: warning 温馨提示

- 1、key 只是在兄弟节点之间必须唯一，但不要求全局唯一
- 2、尽量不要用数组的 index 去作为 key
- 3、禁止使用不稳定因素作为 key，例如随机数
  :::

## 关于 JSX

- 废话不多说，直接对比

```js
// 在react中不使用JSX
var child1 = React.createElement("li", null, "JSPang.com");
var child2 = React.createElement("li", null, "I love React");
var root = React.createElement("ul", { className: "my-list" }, child1, child2);
```

```html
<!-- 在react中使用JSX -->
<ul className="my-list">
  <li>JSPang.com</li>
  <li>I love React</li>
</ul>
```

::: warning 组件和 JSX 对比

#### 1、自定义的组件必须首写字母要进行大写

#### 2、而 JSX 是小写字母开头的。

:::

::: tip JSX 中使用三目运算

```js
import React from "react";
const Component = React.Component;

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{false ? "JSPang.com" : "技术胖"}</li>
        <li>I love React</li>
      </ul>
    );
  }
}

export default App;
```

#### 注意：此时的`className` 等价于 `class`

:::

## 关于 Fragment

- 一个 RN 组件（js）,jsx 元素必须有且只有一个父元素（render 方法会把创建的组件（vnode）、转化为真实的 DOM 元素），但是有时我们并不需要这个所谓的根元素，会生成多余的 DOM 节点

- 解决方案：`Fragment`

```js
import React, { Component, Fragment } from "react";

class SayHello extends Component {
  render() {
    return (
      <Fragment>
        <div>hello</div>
        <ul>
          <li>koma</li>
          <li>paul</li>
        </ul>
      </Fragment>
    );
  }
}
export default SayHello;
```

## 关于 constructor

```js
//js的构造函数，由于其他任何函数执行
constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'' , // input中的值
        list:[]    //服务列表
    }
}
```

## 关于 html

- innerHTML 容易受到 XSS 攻击
- 解决方案：dangerouslySetInnerHTML

```js
function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

## 关于 htmlFor

- 用 htmlFor 代替 JavaScript 中的 for 循环

## 关于 component

- 1、函数式定义的 `无状态组件`

- 2、es5 原生方式 `React.createClass` 定义的组件

- 3、es6 形式的 `extends React.Component` 定义的组件

#### 函数式定义(无状态组件)

```js
// 普通函数
function TestComp(props) {
  let ref;
  return (
    <div>
      <div ref={node => (ref = node)}>...</div>
    </div>
  );
}

// 箭头函数
TestComp = props => {
  let ref;
  return (
    <div>
      <div ref={node => (ref = node)}>...</div>
    </div>
  );
};
```

#### ES5 原生方式

```js
const TodoItem = React.createClass({
    // return an object
    getInitialState(){
        return {
            isEditing: false
        }
    }
    render(){
        return <div></div>
    }
})
```

#### ES6 中 class 类的方式（有状态组件）

```js
import React, { Component } from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // define this.state in constructor
      isEditing: false
    };
  }
  render() {
    return <div></div>;
  }
}
```

#### 加餐：PureComponent --纯组件

```js
import React, { PureComponent } from "react";
class TodoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // define this.state in constructor
      isEditing: false
    };
  }
  render() {
    return <div></div>;
  }
}
```
