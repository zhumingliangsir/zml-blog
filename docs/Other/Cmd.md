---
title: CMD的那些事儿
---

### win+r，实现的神奇骚操作

## 1、计算器 ：

```js
calc;
```

## 2、ip 地址 ：

```js
ipconfig;
```

## 3、画图板：

```js
mspaint;
```

## 4、我的电脑：

```js
explorer;
```

## 5、DVD 播放器 ：

```js
dvdplay;
```

## 6、屏幕录制：

```js
psr.exe;
```

## 7、系统时间：

```js
date;
```

## 8、写字板：

```js
write;
```

## 9、远程桌面：

```js
mstsc;
```

## 10、记事本：

```js
notepad;
```

## 11、注册表：

```js
regedit;
```

## 12、桌面键盘：

```js
osk;
```

## 13、查看操作系统：

```js
- 1、winver
- 2、msinfo32
```

## 14、控制面板：

```js
control;
```

## 15、屏幕分辨率 ：

```js
desk.cpl;
```

## 16、任务管理器：

```js
taskmgr;
```

## 17、浏览器快速定位到地址栏：

```js
1、Alt + D
2、F6
```

## 18、快速打开控制面板：win+x+p

```js
```

## 14、端口号占用：

```js
 1、cmd: netstat -ano 查看端口号对应的pid
 2、任务管理器：详细中找到 对应的pid 关闭即可
```

## 15、cmd 打开网址：

```js
1、explorer "http://www.baidu.com"（引号和协议名必须存在）
2、start www.baidu.com
```

## 16、cmd 文件夹操作：

### 新建文件夹：

```js
md  you
md 朱明亮
md 朱明亮  朱先生  // 创建两个文件夹
md you\me
md  朱明亮/工作
mkdir 朱明亮
mkdir you me // 创建两个文件夹
```

### 删除文件夹：

```js
1、rd you
2、rd you\me  // ***注意：这里只删除了me文件夹***
```

### 返回上级目录：

```js
1、cd ..
2、cd ../
3、cd ../..
```

### 删除文件：

```js
1、del 1.txt
2、del you\1.txt
3、del *.txt   // 删除所有以.txt文件结尾的文件
4、del you\*  // 删除you文件夹下所有文件 （有提示）
5、dle /Q you\*  // 删除you文件夹下所有文件 （没有提示）
```

### 查看当前目录所有文件：

```js
dir;
```

## 17、开关机操作：

```js
1、shutdown -s -t 00   // 立即关机
2、shutdown -s  // 一分钟关机
3、shutdown -s -t 60  // 一分钟关机
4、shutdown -r   // 一分钟重启
5、shutdown -a // 阻止上述操作
6、at 23:00 shutdown -s  // 如果电脑提示命名已经废弃，改用
// schtasks /create /tn "关机" /tr "shutdown /s" /sc once /st 23:00
7、shutdown -h 电脑休眠
8、shutdown -f 注销计算机
9、logoff 注销计算机
```

## 18、批量修改文件后缀名：

```js
1、新建txt文件
2、内容为：ren  *.java  *.jsp
3、将文件后缀改为.bat
4、双击运行即可
```
