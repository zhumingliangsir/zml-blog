---
title: RN环境踩坑
---

## androidx

- RN 版本未升级 0.60+,而项目升级 androidx 后,编译不通过,需要执行以下命令

```js
yarn add -D jetifier
npx jetify
```

## 编译出错

- SDK location not found.

```java
SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/app/react-native-app-master/android/local.properties'
```

解决方案
在 android/下新建文件 local.properties，写入以下内容

```java
//一般默认sdk安装位置,不同的话改成你的路径
sdk.dir = /Users/你的mac用户名/Library/Android/sdk
```
