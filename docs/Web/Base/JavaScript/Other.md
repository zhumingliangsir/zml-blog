---
title: 杂记
---

## 截断长文本

```js
function interceptStr(str, len) {
  if (str) {
    return str.length > len ? str.substr(0, len) + '...' : str
  } else {
    return ''
  }
}
```

## 遍历显示 iconfont 图标

- 自定义图标太多,交接项目这些图标维护起来有点麻烦,写个 test 遍历出来

```js
import React from 'react'
import { View } from 'react-native'
import Iconfont from '@utils/iconfont'
import iconJson from '@utils/iconfont/iconfont.json'
const Test = () => {
  console.log(iconJson)
  return (
    <View style={{ marginTop: 60, flexDirection: 'row', flexWrap: 'wrap' }}>
      {Object.keys(iconJson).map((item, index) => {
        return (
          <>
            <Text>{index}</Text>
            <Iconfont name={item} key={index} size={15} />
            <Text> {'  '}</Text>
          </>
        )
      })}
    </View>
  )
}

export default Test
```
