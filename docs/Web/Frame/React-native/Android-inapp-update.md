---
title: 安卓应用内升级版本方案
---

> [参考 github 某位带佬](https://github.com/songxiaoliang/react-native-app-upgrade)，带佬写的很详细，包含 ios，这里我只集成了 android

## 拉取相关资源

- 将项目拉取下来,将解压后的 android_upgrade 整个目录放到 /android/app/src/main/com/[你的安卓项目名]/ 下面

```js
git clone https://github.com/songxiaoliang/react-native-app-upgrade.git
```

## 修改配置文件

- 在 android/app/src/main/res/下新建 update_file_provider.xml 文件

```xml
<!--写入以下内容-->
 <paths>
    <!--升级-->
    <external-cache-path
        name="update_external_cache"
        path="." />

    <cache-path
        name="update_cache"
        path="." />
</paths>
```

- 在 AndroidMainfest.xml 文件下添加权限和服务配置

```xml
 <uses-permission android:name="android.permission.INTERNET" />
    <!--8.0安装需要的权限-->
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <application
      android:name=".MainApplication"
      android:allowBackup="true"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:theme="@style/AppTheme">

        // 添加fileProvider配置代码
        <provider
            android:name=".android_upgrade.FileProviderAdapter"
            android:authorities="${applicationId}.updateFileProvider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/update_file_provider" />
        </provider>

        // 添加Service代码
        <service
            android:name=".android_upgrade.DownloadService"
            android:exported="true" />

            ...
    </application>
```

- 修改 android/app/build.gradle,将 compileSdkVersion 与 buildToolsVersion 指定为 26 以上即可(现在一般都是 28)

- 在 android/app/src/main/res/values/strings.xml 加入

```xml
 <string name="android_auto_update_download_progress">正在下载:%1$d%%</string>
```

- 修改 MainApplication.java 文件

```java
// 导入UpgradePackage
 import [安卓项目名].UpgradePackage;
//例如
 import com.xx.android_upgrade.UpgradePackage;
//在getPackages中加入
new UpgradePackage()
```

- 将我们拉取的 android_upgrade 目录下所有文件中的【改成自己的包名】.android_upgrade;将【改成自己的包名】替换为自己的包名,例如

```java
package com.xx.android_upgrade;
//最好在每个文件中搜索一下，怕有遗漏
```

## 如何使用

1.  首先导入 NativeModules 模块

```js
import { NativeModules } from 'react-native'
```

2.  调用 upgrade 方法(在合适的地点合适的时间)

```js
NativeModules.upgrade.upgrade(this.state.apkUrl)
```

3. 获取下载进度

```js
componentWillMount(){
    DeviceEventEmitter.addListener('LOAD_PROGRESS',(msg)=>{
        let title = "当前下载进度：" + msg
        ToastAndroid.show(title, ToastAndroid.SHORT);
    });
}
```
