---
title: 电脑隐藏盘符
---

::: warning 温馨提示
当我们电脑中有一些特殊文件，我们并不想暴露在人脸之下，我们可以通过如下操作去隐藏我们的判断，例如将 D 盘隐藏
:::

::: tip 操作

- 1、打开注册表 `win+r`(regedit)

- 2、依次展开定位到`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer`

- 3、接下来我们在窗口右侧空白处点击右键，`新建`一个 `32` 位的 `DWORD` 值，如下图所示

  <div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk1.png"/>
  </div>

- 4、新建好 `DWORD` 值后，我们将其重命名为 `Nodrives`，如下图

<div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk2.png"/>
  </div>

- 5、然后我们右键点击`Nodrives`，选择`修改`，先在`基数`处勾选`十进制`，然后在数值数据处输入数字`8`，如上图，完事后点击`确定`

<div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk3.png"/>
  </div>

- 6、`重启电脑`，制定盘符被隐藏

- 7、访问：

<div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk4.png"/>
  </div>

- 8、扩展：隐藏不同盘符对应表

<div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk5.png"/>
  </div>
  <div style="text-align: center;">
    <img src="https://zml-blog-images.oss-cn-beijing.aliyuncs.com/hide-disk6.png"/>
  </div>
  :::
