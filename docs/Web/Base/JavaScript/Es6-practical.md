---
title: es6的使用
---

## 解构赋值

- 交换数值

```js
//交换a,b的值
[a, b] = [b, a]
```

## 数组

- 数组扁平化、去重

```js
//1
Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
  return a - b
})

//2
arr
  .toString()
  .split(',')
  .sort((a, b) => {
    return a - b
  })
```
