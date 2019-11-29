---
title: 理论篇
---

## 关于

- React Native 是 FaceBook 2015 年开源的基于 React 的 javascript 框架，旨在使用 javascript 高效开发手机端应用。 目前它在 github 上已经拥有 82.8K+ 的 Star 和 18.5K 的 Fork，受追捧的程度超高。
- 官网地址：https://reactnative.cn/

<!-- ```js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
const Children = props => {
	const { defaultValue } = props; //接收
	const [count, setCount] = useState(defaultValue); //state初始化
	return (
		<View style={{ marginTop: 100 }}>
			<Text>{count}</Text>
			{/*控制自身状态按钮，点击增加1*/}
			<TouchableOpacity onPress={() => setCount(count + 1)}>
				<Text>点击+1</Text>
			</TouchableOpacity>
			{/*传递自身状态值给父组件，接收父组件传递的函数参数运行并将count作为参数传递回去*/}
			<TouchableOpacity onPress={() => props.get(count)}>
				<Text>获取</Text>
			</TouchableOpacity>
		</View>
	);
};
``` -->

## 俗不可耐

- React Native 是利用 JS 来调用 Native 端的组件，从而实现相应的功能


<!-- ```js
const Parent = props => {
  const [value, setValue] = useState(10);
  return (
    <>
      {/*注入参数*/}
      <Children defaultValue={10} get={v => setValue(v)} />
      {/*实时显示获取到的值*/}
      <Text>父组件中获取的count{value}</Text>
    </>
  );
};
export default Parent;
``` -->

## 百家争鸣

#### Weex：基于 Vue.js（JS 框架）开发的 App（write one，run anywhere）

- 背景：Alibaba 出品
- 优点：
- 可以做到一套代码，跨平台运行，通过 runtime 会自动把 JS 代码解析成对应平台(iOS/安卓)的原生 API，本质还是原生开发
- 既有 Native 的体验，又保证了开发效率
- 缺点：开源较晚，互联网上相关资料还比较少，学习成本也不小，性能相对原生稍差

#### Flutter：Geogle 新推出的 flutter 移动 UI 框架（2018）

- 背景：Geogle 出品
- 优点：
- 相对 weex 和 react-native 相比性能更佳...且对 iOS 和 Android 两端的兼容性也更好
- 既有 Native 的体验，又保证了开发效率

#### Weex：基于 Vue.js（JS 框架）开发的 App（write one，run anywhere）

- 背景：Alibaba 出品
- 优点：
- 可以做到一套代码，跨平台运行，通过 runtime 会自动把 JS 代码解析成对应平台(iOS/安卓)的原生 API，本质还是原生开发
- 既有 Native 的体验，又保证了开发效率
- 缺点：开源较晚，互联网上相关资料还比较少，学习成本也不小，性能相对原生稍差

#### 选择 React Native 之我见

- 1、最好的是 flutter，但是硬伤是太年轻，+学习成本，开发成本，使用成本较高，不支持热更新
- 2、weex 和 react-native 本质都是利用 JavaScript 去调用原生，但是较 weex，RN 相对成熟，使用者相对较多
- 3、RN 是 Facebook 重点维护，weex 社区相对较小

## 总结

- flutter、react-native 、weex 三只蓬勃发展的富二代，未来看走向

<!-- <div style="text-align:center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/ReactNative/component-communication.gif"/>
</div> -->
