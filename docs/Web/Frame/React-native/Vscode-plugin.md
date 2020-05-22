---
title: vscode开发react-native常用插件
---

## code

- Prettier - Code formatter

安装后在项目根目录下新建 prettier 的配置文件,轻轻松松管理代码格式化设置

```json
//  .prettierrc

{
  "printWidth": 150, //代码宽
  "tabWidth": 2,
  "singleQuote": true, //单引号
  "bracketSpacing": true
}
```

我这里简单配置了几个,根据自己需要去配置

- Path Intellisense,在引入其他模块文件时，会识别出文件给出提示

## 美化

- One Dark Pro,配置代码颜色主题

<div style="text-align:center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/ReactNative/vscodePlugin/One-dark-pro.png"/>
</div>

- Color Highlight,让你的颜色代码自带背景色

<div style="text-align:center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/ReactNative/vscodePlugin/color-highlight.png"/>
</div>

## eslint

- 没配置 eslint 的项目差不多就是玩具...

```JSON
{
  "plugins": ["react-native", "react-hooks"],
  "extends": "@react-native-community",
  "rules": {
    "react-native/no-inline-styles": 0,
    "semi": 0,
    "radix": "off",
    "quotes": 0,
    "comma-dangle": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "dot-notation": "off",
    "no-shadow": "off",
    "curly": "off"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```
