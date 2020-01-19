---
title: SSD性能最大化
---

::: warning 简介
1、固态硬盘的 TRIM 功能：在传统的机械硬盘中，已删除文件的逻辑位置会被标记，方便后续存储数据覆盖这些无用数据的逻辑位置，但是固态硬盘没有这种机制，主控并不知道这些数据已经无用，直到有新的数据要求写入该块，这样一来，无用数据在垃圾回收（GC）过程中被当作有用数据对待，就大大降低了硬盘效率和使用寿命，而 TRIM 功能的出现就是弥补这一缺陷的，固态硬盘使用了 TRIM 功能后，能避免 SSD 在垃圾回收（GC）时将无用数据当成有用数据来搬运，从而起到延长 SSD 寿命的作用
:::

::: warning 操作
2、打开命令提示符（管理员）

```js
fsutil behavior query disabledeletenotify
```

:::

::: warning 判断
3、如果 `DisableDeleteNotify = 0`，则说明系统已开启 TRIM 功能，如果 `DisableDeleteNotify = 1`，则说明没开启。
:::

::: warning 操作
4、如果没有开启，我们则继续在命令提示符里输入：

```js
fsutil behavior set disabledeletenotify 0
```

:::

::: warning 检测
5、如果 `DisableDeleteNotify = 0`，则说明我们已经成功开启了 TRIM 功能。
:::
