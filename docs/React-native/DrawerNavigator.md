---
title: React-navigation之抽屉导航
---

## 前言

在初遇 RN 的时候 navigation 的文档就啃了挺久,当时公司 app 产品都是采用的底部 tab 导航的形式,特别的一处是底部中间增加了一个自定义按钮,看似很多花里胡哨的操作夜的看看是不是适合产品,不是越花越好。

玩过很多款产品,网易云音乐:顶部 tab+抽屉导航,google 应用商店:tab+抽屉导航,推特:底部 tabbar+抽屉导航(复杂些的产品组合起来使用感觉不错)、News Break:tab+抽屉导航,还有 b 站(感觉 app 很复杂..),抽屉导航带来一种简约的舒适感

这次正好写个 app 玩玩,应用下抽屉导航,参照一些优秀的博客以及 react-navigation 官方文档

## 效果

主页点击头像打开抽屉

<div style="text-align:center">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/ReactNative/DrawerNavigator/drawer.png"/>
</div>

<div style="text-align:center">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/ReactNative/DrawerNavigator/home.png"/>
</div>
