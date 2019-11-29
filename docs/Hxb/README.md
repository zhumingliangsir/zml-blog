---
title: hxb前端项目文档
sidebar: auto
---

## apollo

包名 apollo，暴露 GQL，apollo-hook api，以及自定义 Query 组件

-   query.js，该文件导出两个 query 请求组件，QueryList 组件用来请求列表数据，Query 组件用来请求普通数据

```js
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useQuery } from 'apollo'; //引入apollo包中导出的@apollo/react-hooks
import { GQL } from 'gqls'; //gqls包中存放全部graphql schema文件
import { Loading, Error, Empty, ListFooter } from 'component'; //全部公共组件，这里导入请求loading，error，以及数据为空时需要的缺省页面
import { status } from 'store'; //mobx仓库包名store，status仓库中存放列表底部加载状态还是数据已请求完的底部状态
const QueryList = props => {
	const { QueryItem, variables = {}, param = {}, res, name } = props;
	const params = Object.assign({}, { variables: variables }, param);
	const { loading, error, refetch, fetchMore, data } = useQuery(GQL[name], params);
	if (loading) return <Loading />;
	if (error) return <Error />;
	let {
		data: items,
		paginatorInfo: { currentPage, hasMorePages },
	} = data[res];
	return (
		<FlatList
			data={items}
			keyextractor={index => index.toString()}
			refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
			renderItem={({ item }) => {
				return <QueryItem item={item} />;
			}}
			onEndReachedThreshold={0.1}
			onEndReached={() => {
				if (!status.fetching && hasMorePages) {
					status.setFetching(true);
					fetchMore({
						variables: {
							page: ++currentPage,
						},
						updateQuery: (prev, { fetchMoreResult: more }) => {
							let moreData = {};
							moreData[res] = Object.assign(
								{},
								{
									...more[res],
									data: [...prev[res].data, ...more[res].data],
								}
							);
							status.setFetching(false);
							return moreData;
						},
					});
				}
			}}
			ListFooterComponent={() => <ListFooter loading={hasMorePages} />}
			ListEmptyComponent={() => <Empty />}
		/>
	);
};

const Query = props => {
	const { QueryItem, variables = {}, name, res, param } = props;
	const params = Object.assign({ variables: variables }, param);
	const { loading, error, data, refetch } = useQuery(GQL[name], params);
	if (loading) return <Loading />;
	if (error) return <Error />;
	return <QueryItem item={data[res]} />;
};

export { Query, QueryList };
```

### Query 的简单使用

```js

import { Query } from 'apollo';//从apollo包中导入我们自定义的Query组件
const Item = props => {//Item函数组件用来接收数据渲染页面
	const { item } = props;//默认返回query结果为item，自己可以通过console在控制台查看详情
	return (
		<View>
			<Text>{items.data[0].name}</Text>//本来是item.name,这中间的data[0]是因为使用的是一个列表接口
		</View>
	);
};
const param = {
	name: 'recommendAuthorsQuery',//我们schema文件中 query名字，必传
	res: 'recommendAuthors',//与后端协商的接口名字，接收query结果需要，必传
	QueryItem: Item,//传递我们定义好的函数组件到Query组件中，他将返回查询结果到props.item中，必传
    variables:{}//定义我们请求接口的参数，没有可不写
    param: {}//额外的参数，一般情况下我们都未传递，因此我将他与variavles做了分离，没有可不写
};

class index extends Component {
	render() {
		return (
			<Screen>
				<Query {...param} />//param为我们定义好的参数，传入到我们导入的Query组件
			</Screen>
		);
	}
}

export default index;
```

### QueryList 的简单使用

```js
import { QueryList } from 'apollo';//从apollo包中导入我们的QueryList组件

const Item = prop => {//Item函数组件用来接收数据渲染列表
	const item = prop.item;//这里的item结果是数组里单个数据，比如data[0],data[1]...
	return <Text style={{ height: 20 }}>{item.name}</Text>;
};

const param = {
	name: 'recommendAuthorsQuery',//我们schema文件中 query名字，必传
	res: 'recommendAuthors',//与后端协商的接口名字，接收query结果需要，必传
	QueryItem: Item,//传递我们定义好的函数组件到Query组件中，他将返回查询结果到props.item中，必传
    variables:{}//定义我们请求接口的参数，没有可不写
    param: {}//额外的参数，一般情况下我们都未传递，因此我将他与variavles做了分离，没有可不写
};
class RecommendAuthors extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Screen>
				<QueryList {...parama} />//param为我们定义好的参数，传入到我们导入的QueryList组件
			</Screen>
		);
	}
}
export default RecommendAuthors;

```

## common

存放公共变量，包括颜色，公共布局样式 Layout.js,公共其他样式 skin.js,设备相关 Device.js，主要是多处使用，很常用，或者牵一发而动全身，定制一套主题

### color.js

```js
const bgColor = '#F5F6F8';
export { bgColor };
```

-   使用

```js
import { Color } from 'common';

Color.bgColor; //'#F5F6F8'
```

### Device.js

```js
import { Dimensions, StatusBar } from 'react-native';
let { width, height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export { width, height, STATUSBAR_HEIGHT }; //屏宽、屏高、状态栏高
```

### Layout.js

```js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	cCenter: {
		//横向居中
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rCenter: {
		//竖直居中
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
```

### skin.js

```js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	top_bottom_line: {
		borderBottomColor: '#F2F2F4',
		borderTopColor: '#F2F2F4',
		borderBottomWidth: 1,
		borderTopWidth: 1,
	},
});
```

### common 包联合使用

-   使用

```js
import React from 'react';
import { View } from 'react-native';
import { Device, Color, skin, Layout } from 'common';
const test = props => {
	//一个占满屏的盒子，横向居中，背景颜色‘#F5F6F8’，文字带上边框与下边框
	return (
		<View
			style={[
				{
					backgroundColor: Color.bgColor,
					width: Device.width,
					height: Device.height,
				},
				Layout.cCenter,
			]}>
			<Text style={skin.top_bottom_line}>测试文字</Text>
		</View>
	);
};
```

## component

公共组件，举些例子

### Screen

```js
import React from 'react';
import { Screen } from 'component';
const test = props => {
	return (
		//header参数，不传这个参数，页面将会携带一个头部，左箭头可返回上一页面，底部导航页面传header参数，因为不需要跳转回任何页面
		<Screen header>
			<Text>测试文字</Text>
		</Screen>
	);
};
```

### Button 按钮使用

```js
import React from 'react';
import { Button } from 'component'
import { View } from 'react-native'
import {  Layout } from 'common'
const param = {
    text:'我是自定义按钮',//按钮显示文字，默认参数为‘按钮’
    width: 200,//更改按钮长度，默认为100
	height: 40,//更改按钮高度，默认为40
	hollow: true,//是否为镂空，默认为false
    color: '#58D8FE',//整个按钮色调
    borderRadius:10,//圆角，默认数字3
    custom:{//注入自定义样式给按钮
        margin:10
    }
}
const param1 = {
    text: '我是按钮', //按钮显示文字，默认参数为‘按钮’
    color: '#027fff' //整个按钮色调
    borderRadius:10
};
const param2 = {
	disabled: true, //不可点击
	color: 'red' //整个按钮色调
};
const test = props=>{
    //注入参数,press参数为一个函数，取到Button按钮的点击事件
    return(
        <View style={Layout.cCenter}>
            <Button {...param} press={()=>{}} />
			<Button {...param1} />
			<Button {...param2} />
		</View>
    )
}
export default test
```

-   Button 按钮效果图

<div style="text-align: center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/hxbDoc/Button.png"/>
</div>

### SettingList 组件使用

```js
import React from 'react';
import { View } from 'react-native';
import { SettingList } from 'component'; //导入公共组件
import { Layout } from 'common';
import Iconfont from 'react-native-vector-icons/AntDesign'; //官方图标库
const param1 = {
	leftTitle: '左边标题1',
	rightTitle: '右边标题',
	icon: <Iconfont name="questioncircleo" size={15} color="blue" />,
};
const param2 = {
	leftTitle: '左边标题2',
	rightTitle: '右边标题',
	icon: <Iconfont name="mail" size={15} color="#007fff" />,
};
const param3 = {
	leftTitle: '左边标题3', //左边标题
	rightTitle: '右边标题', //右边标题，默认为空
	icon: <Iconfont name="circledowno" size={10} color="#007fff" />, //左边icon
	custom: {
		//自定义样式
		marginVertical: 10,
	},
};
const param4 = {
	leftTitle: '左边标题4',
	rightTitle: '右边标题',
	icon: <Iconfont name="github" size={15} color="red" />,
	custom: {
		marginVertical: 10,
	},
};
const test = props => {
	return (
		<View style={[{ backgroundColor: '#f4f5f5' }, Layout.cCenter]}>
			<SettingList {...param1} />
			<SettingList {...param2} />
			<SettingList {...param3} />
			<SettingList {...param4} />
		</View>
	);
};

export default test;
```

-   效果图

<div style="text-align: center;">
  <img src="https://xjq-blog.oss-cn-shenzhen.aliyuncs.com/blog/hxbDoc/SettingList.png"/>
</div>

## routers

路由配置，底部导航栏配置

### routes.js

注册页面，未注册无法通过路由跳转，app 中也不会加载

```js
import TabBar from './tabBar'; //引入底部导航
import { User, Home, Login } from 'screen'; //引入screen包中全部页面
export default {
	Home: {
		//路由名字
		screen: TabBar, //路由指定页面
	},
	私密: {
		screen: User,
	},
	登录注册: {
		screen: Login,
	},
};
```

### stack.js

StackNavigator 是最常见的一种 navigator,我们需要通过 createStackNavigator 添加所有页面，这里我们的页面都注册放在 routes 文件中，这样我们能够从一个页面跳转到另一个页面。 当你用一个 navigator 注册一个组件时，这个组件将会添加一个属性 navigation ，更多关于 navigation，这个属性能够控制不同页面间的跳转，最终通过 createAppContainer 创建 app 容器

```js
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Router from './routes';

export default createAppContainer(
	createStackNavigator(Router, {
		initialRouteName: 'Home', //初始化页面为routes.js中的Home，即为我们所创建的底部导航栏，app初始化后，加载四个底部导航页
		defaultNavigationOptions: () => ({
			header: null,
			gesturesEnabled: true,
		}),
	})
);
```

### tabBar.js

底部导航配置

```js
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Iconfont from 'react-native-vector-icons/FontAwesome';
import { Home, User, Login, Test2, Test3, BindAlipay, VerifyAccount } from 'screen';

const route = {
	//底部导航名字与对应页面配置
	home: {
		screen: Home, //调试深层页面时可将自己页面设置到底部导航第一个页面
		navigationOptions: () => TabOptions('home'),
	},
	user: {
		screen: Login,
		navigationOptions: () => TabOptions('user'),
	},
	setting: {
		screen: Test3,
		navigationOptions: () => TabOptions('setting'),
	},
	nav: {
		screen: User,
		navigationOptions: () => TabOptions('nav'),
	},
};

const TabOptions = routeName => {
	const title = routeName;
	const tabBarIcon = ({ focused }) => {
		let iconName, size;
		switch (
			routeName //配置图标，以及图标大小
		) {
			case 'home':
				iconName = 'home';
				size = 18;
				break;
			case 'user':
				iconName = 'user';
				size = 18;
				break;
			case 'setting':
				iconName = 'home';
				size = 20;
				break;
			case 'nav':
				iconName = 'heart-o';
				size = 18;
		}
		return <Iconfont name={iconName} size={size} color={focused ? '#31A3FE' : 'grey'} />;
	};
	return {
		title,
		tabBarIcon,
	};
};

export default createBottomTabNavigator(route, {
	initialRouteName: 'setting', //初始化页面，参数为route中页面名字
	lazy: false,
	backBehavior: 'none',
	tabBarOptions: {
		showLabel: true,
		activeTintColor: '#31A3FE',
		inactiveTintColor: 'grey',
	},
	navigationOptions: ({ navigation }) => {
		const header = null; //将每个页面自带头部隐藏
		return {
			header,
		};
	},
});
```

## screen

所有页面文件，最好每个文件夹对应一个页面,举些栗子

### 用户主页

```js
```

## utils

工具类

### hook

存放全部自定义 hook 组件

-   useInterval.js

定时器 hook

```js
import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
	const latestCallback = useRef(() => {});

	useEffect(() => {
		latestCallback.current = callback;
	});

	useEffect(() => {
		if (delay !== null) {
			const interval = setInterval(() => latestCallback.current(), delay || 0);
			return () => clearInterval(interval);
		}
		return undefined;
	}, [delay]);
}
```

-   useTimeoutFn.js

延时器 hook

```js
import { useCallback, useEffect, useRef } from 'react';

export default function useTimeoutFn(fn, ms = 0) {
	const ready = useRef(false);
	const timeout = useRef();
	const isReady = useCallback(() => ready.current, []);
	const set = useCallback(() => {
		ready.current = false;
		timeout.current = setTimeout(() => {
			ready.current = true;
			fn();
		}, ms);
	}, [ms, fn]);
	const clear = useCallback(() => {
		ready.current = null;
		timeout.current && clearTimeout(timeout.current);
	}, []);

	useEffect(() => {
		set();

		return clear;
	}, [clear, ms, set]);
	return [isReady, clear, set];
}
```

### tools

工具类方法

#### format.js

处理时间..

-   getDateDiff

使用方法

```js
import { Tools } from 'utils';
Tools.getDateDiff(created_at);
```

```js
export function getDateDiff(date) {
	let timestamp = new Date(date).getTime();
	let minute = 1000 * 60;
	let hour = minute * 60;
	let day = hour * 24;
	let month = day * 30;
	let now = new Date().getTime();
	let diffTime = now - timestamp;
	if (diffTime < 0) return;
	let monthC = diffTime / month;
	let weekC = diffTime / (7 * day);
	let dayC = diffTime / day;
	let hourC = diffTime / hour;
	let minC = diffTime / minute;
	let result;
	if (monthC >= 1) {
		result = '' + parseInt(monthC) + '月前';
	} else if (weekC >= 1) {
		result = '' + parseInt(weekC) + '周前';
	} else if (dayC >= 1) {
		result = '' + parseInt(dayC) + '天前';
	} else if (hourC >= 1) {
		result = '' + parseInt(hourC) + '小时前';
	} else if (minC >= 1) {
		result = '' + parseInt(minC) + '分钟前';
	} else {
		result = '刚刚';
	}
	return result;
}
```

::: tip Warning!!
Have as much fun as possible!!
:::
