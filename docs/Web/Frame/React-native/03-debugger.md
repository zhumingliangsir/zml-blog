---
title: 项目调试
---

### 1、查看连接设备：

<div style="text-align: center;">
  <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/check-devices.png"/>
</div>

### 2、打开调试面板：

- 模拟器 ctrl+m,真机：摇动手机

<div style="text-align: center;margin-top:20px">
  <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/debugList.png"/>
</div>

### 功能描述

- 1、Reload（同双击 R 键）：就是重刷整个应用，类似于在浏览器的 F5 刷新。

  - 注意：只有修改 JavaScript 文件时，刷新功能才起作用。如果新增了文件或者修改了 Native 代码，就需要使用 Xcode 重新编译应用了。

- 2、Debug JS Remotely：点击它，会弹出 Chrome 的一个标签，如下：
    <div style="text-align: center;margin-top:20px">
      <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/localhost.png"/>
    </div> 
    - 注意：这里的 Status：Debugger session #0 active 就表示程序与该页面成功建立连接了，打开控制台既可看见在组件中输出的日志，也可以打断点进行深入调试
- 3、Enable Live Reload：程序协助开发者，进行 reload

- 4、Enable Hot Reloading：
  程序无需停止，动态替换变更部分

- 5、Toggle Inspector：
  开启监视器，可以查看元素 CSS 信息，网络请求等

<div style="text-align: center;margin-top:20px">
  <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/debug-style.png" />
</div>

<div style="text-align: center;margin-top:20px">
  <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/debug-internet.png" />
</div>

- 6、Show Perf Monitor：
  该功能启用后会显示一个监控窗口，显示出实时的内存占用、UI 和 JavaScript 的 FPS 等信息。帮助我们调试性能问题

    <div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/monitor1.png" /></div>

    <div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/monitor2.png" /></div>

- 7、Dev Settings：修改端口等
    <div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/port.png" /></div>
    <div style="text-align: center;margin-top:20px"><img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/react-native/port2.png" /></div>
  - 7.1  js dev mode
  - 使用dev=true加载javascript捆绑包以简化调试器。禁用以进行性能测试。重新加载以使更改生效
  - 7.2  js minify： js压缩，类似于vue中minify的loader
  - 7.3  use js deltas ：从metro请求deltas包以获得更快的重新加载（实验的）
  - 7.4  native delta handling：在本机代码中处理增量包，而不将代码写入磁盘
  - 7.5 animations fps summaries：
  - 在动画结束时，toast和logcat将有关该转换期间fps的调试信息记录到日志中。当前仅支持transitions（）
  - 7.6 debug server host :更改ip端口号
  - 7.7  start sampling profiler on init ：在初始化时启动采样探查器
