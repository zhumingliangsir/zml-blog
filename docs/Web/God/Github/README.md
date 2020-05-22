---
title: Github上传项目详解
---

- 1、首先你需要一个 `github` 账号，所有还没有的话先去注册吧！[https://github.com/](https://github.com/)

- 2、我们使用 `git` 需要先安装 `git` 工具，这里给出下载地址，下载后一路直接安装即可：
- [https://git-for-windows.github.io/](https://git-for-windows.github.io/)

::: tip 操作

- 1、进入 `Github` 首页，点击 `New repository` 新建一个项目
- 2、填写相应信息后点击 `create` 即可

```md
Repository name: 仓库名称
Description(可选): 仓库描述介绍
Public, Private : 仓库权限（公开共享，私有或指定合作者）
Initialize this repository with a README: 添加一个 README.md
gitignore: 不需要进行版本管理的仓库类型，对应生成文件.gitignore
license: 证书类型，对应生成文件 LICENSE
```

- 3、点击`Clone or dowload`会出现一个地址，copy 这个地址备用。

- 4、接下来就到本地操作了，首先右键你的项目，如果你之前安装 git 成功的话，右键会出现两个新选项，分别为 Git Gui Here,`Git Bash Here`,这里我们选择 `Git Bash Here`，进入如下界面，`Test_Bluetooth` 即为我的项目名

- 5、接下来输入如下代码（关键步骤），把 github 上面的仓库克隆到本地

```js
git clone https://github.com/CKTim/BlueTooth.git（https://github.com/CKTim/BlueTooth.git替换成你之前复制的地址）
```

- 6、这个步骤以后你的本地项目文件夹下面就会`多出个文件夹`，该文件夹名即为你 `github` 上面的项目名，如图我多出了个 `Test` 文件夹，我们把本地项目文件夹下的`所有文件`（除了新多出的那个文件夹不用），其余都`复制到`那个新`多出的文件夹`下

- 7、接着继续输入命令 `cd Test`，进入 Test 文件夹

- 8、接下来依次输入以下代码即可完成其他剩余操作

```md
git add . （注：别忘记后面的.，此操作是把 Test 文件夹下面的文件都添加进来）
git commit -m "提交信息" （注：“提交信息”里面换成你需要，如“first commit”）
git push -u origin master （注：此操作目的是把本地仓库 push 到 github 上面，此步骤需要你输入帐号和密码）
```

:::

::: warning 加餐

- 1、在线预览别人的项目：在 http 前面添加：
  `htmlpreview.github.com/?`
- 2、展示当前页面所有文件
  `ls -al`
  :::
