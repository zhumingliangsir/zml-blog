---
title: Android-APK
---

### 1、找到 JDK 的安装目录

```js
// 在bin目录下打开命令行，方式不限制
C:\Program Files\Java\jdk1.8.0_152\bin
```

### 2、生成签名文件

```js
keytool -genkey -v -keystore br-loan-app-release-key.keystore -alias br-loan-app-key-alias -keyalg RSA -keysize 2048 -validity 10000
// 会在当前目录下，生成br-loan-app-release-key.keystore文件
```

#### 屌丝说书：

```js
- keystore br-loan-app-release-key.keystore 为生成的密钥文件名称，

- alias br-loan-app-key-alias 为当前别名，

- keysize 2048 为设置密钥大小

- validity 10000 为设置密钥的有效日期
```

### 3、根据提示输入口令

<div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/setPwd.png" /></div>

- <a>注意：记住 密钥库口令！记住 密钥库口令！记住 密钥库口令！---------非常重要</a>

### 4、添加签名到 APP

- 执行完成后将会生成 br-loan-app-release-key.keystore 文件 , 找到 keystore 文件后，放入项目中的 android/app 目录下。

### 5、设置 gradle 变量

- 找到 <a>android/gradle.properties</a> 文件，添加配置如下

```js
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD= you setting psd ******
MYAPP_RELEASE_KEY_PASSWORD= you setting psd ******
```

- 好吧，让你看看我写的吧

<div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/keystore.png" /></div>

### 6、将签名项目的 gradle 配置中

- 找到 android/app/build.gradle 文件，添加如下配置

```js
android {
    ...
    defaultConfig { ... }
    // 重点开始
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
        release {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            signingConfig signingConfigs.release
        }
    }
    // 重点结束
}
```

### 7、生成 APK

- 进入当前项目中的 android 目录，运行如下：

```js
$ cd android
$ ./gradlew assembleRelease
```

### 8、查看 APK

- 进入当前项目中的 android 目录，运行如下：

```js
android / app / build / outputs / apk / release / app - release.apk;
```

### 9、 哎呀妈，完事了，加餐哈
