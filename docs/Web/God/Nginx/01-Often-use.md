---
title: 常用命令
---

## 1、启动

```js
// 方式1
nginx（低版本nginx无效，需要配置path）
// 方式2
systemctl start nginx.service
```

## 2、停止

```js
1、平滑停止：nginx -s quit

2、暴力停止：nginx -s stop

3、暴力停止：killall nginx

4、正常停止：systemctl stop nginx.service

5、停止某一个服务：

    kill -9 端口号
    ex:
    kill -9 15253
```

## 3、重启 nginx

```js
systemctl restart nginx.service
```

## 4、重载配置文件

```js
nginx -s reload
```

## 5、查看端口号

```js
netstat - tlnp;
```

## 6、查看端口号是否启动了程序

```js
netstat -anop | grep 8880
```

## 7、查看实时日志

```js
tail -f access.log
tail -1000f access.log
tail -f error.log
tail -1000f error.log
```

## 8、查看 nginx 安装目录

```js
rpm -ql nginx
```

## 9、查看服务的运行状况

```js
ps aux | grep nginx
ps -ef  | grep nginx
ps -aef | grep nginx
```

## 10、查看 yum 的 nginx 源

```js
yum list | grep nginx
```

## 11、上传文件

```js
// 全局安装：
yum install -y lrzsz

// 上传文件：
rz -be

// 下载文件：
sz -be
```

## 12、解压文件

```js
// 全局安装：
yum install -y unzip zip

// 解压文件：
unzip 20180110PM.zip

```

## 13、新建文件夹

```js
// 例如：mkdir demo01
mkdir 文件名

```

## 14、删除文件夹及其子文件

```js
// 例如：ex: rm -rf app
rm -rf  文件夹名

```

## 15、删除文件

```js
// 例如：ex: rm -r index.html
rm -r 文件名

```

## 16、删除某个文件之外的所有文件

```js
// 例如：ex: rm -r index.html
rm -rf !(file1)

// 如果是多个要排除的，可以这样：
# rm -rf !(file1|file2)

```

## 17、移动文件

```js
mv 2019.zip ../
```

## 18、打包文件

```js
// (将static目录下的文件，压缩为test.tar.gz)
tar -zcvf test.tar.gz static/
```

## 19、复制文件

```js
// 将8090.conf 复制一份，名字为8091.conf
cp 8090.conf 8091.conf
```

## 20、复制文件夹

```js
// 将text1 文件夹复制一份，名字为text2
cp -r text1 text2
```

## 21、检测自配置项是否有错误

```js
nginx -t
```

## 加餐：

- 查看服务器排行榜：
- <a href="https://w3techs.com/" target="_blank">https://w3techs.com/</a>
