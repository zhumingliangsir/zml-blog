---
title: 数据库安装系列
---

## mac 下安装 mongo

1. 第一步

```js
brew tap mongodb/brew
```

2. 安装社区版

```js
brew install mongodb-community@4.2

//配置文件
/usr/local/etc/mongod.conf
//log
/usr/local/var/log/mongodb
//数据存储位置
/usr/local/var/mongodb
```

3. 开启服务

```js
brew services start mongodb-community@4.2
```

4. 连接([图形化工具下载](https://robomongo.org/download))

```js
mongo
```

## centos 安装 mongo

1. 更新yum源
```js
yum update
```
2. 添加mongo源
```js
vim /etc/yum.repos.d/mongodb-org-3.2.repo
```
在mongo源中写入以下信息
```js
[mongodb-org-3.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.2.asc
```

3. 安装
```js
sudo yum install mongodb-org
```
4. 管理
```js
sudo systemctl start mongod //启动
sudo systemctl restart mongod//重启
sudo systemctl stop mongod//关闭
sudo systemctl enable mongod //开机自启
/etc/mongod.conf //配置文件
```

