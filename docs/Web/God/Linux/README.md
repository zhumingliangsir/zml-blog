---
title: Linux
---

> 参考[竹子-博客(.NET/Java/Linux/架构/管理/敏捷)](https://www.cnblogs.com/peida/archive/2012/10/23/2734829.html)

> 参考[27 个常用的 Linux 命令](https://www.jianshu.com/p/0056d671ea6d)

## 基础命令

```Shell
ls [option] [dir]
    -a 列出目录下的所有文件，包括以 . 开头的隐含文件
    -A 同-a，但不列出“.”(表示当前目录)和“..”(表示当前目录的父目录)
    -c  配合 -lt：-t 根据 ctime 排序及显示 ctime (文件状态最后更改的时间)配合
    -l:显示 ctime 但根据名称排序否则：根据 ctime 排序
    -R, –recursive 同时列出所有子目录层(递归)
    -F 列出子目录

        ls | sed "s:^:`pwd`/:" 在ls中列出文件绝对路径
        find $PWD -maxdepth 1 | xargs ls -ld 列出当前目录下的所有文件（包括隐藏文件）的绝对路径， 对目录不做递归
        find $PWD | xargs ls -ld  同上,带递归操作

mkdir 新建目录
rmdir 删除指定目录

find [option] [param] 在指定目录下查找文件
    -depth:从指定目录下最深层的子目录开始查找
    -ctime<24小时数>:查找在指定时间之时被更改的文件或目录，单位以24小时计算；
    -mtime 文件内容上次修改时间
    -atime 文件被读取或访问的时间

        find . 列出当前目录及子目录下所有文件和文件夹
        find . -mtime -1 查看1小时内修改的所有文件
        find /home -name "*.txt" 查找/home目录下以.txt结尾的文件名
        find /home -name "*.txt" 同上(忽略大小写)
        find . \( -name "*.txt" -o -name "*.pdf" \)或find . -name "*.txt" -o -name "*.pdf"
        查找当前目录及子目录下查找所有以.txt和.pdf结尾的文件
        find . -regex ".*\(\.txt\|\.pdf\)$" 基于正则表达式匹配文件路径
        find /usr/ -path "*local*" 匹配文件路径或文件
        否定参数 !
        find /home ! -name "*.txt" 找出/home下不是以.txt结尾的文件

tar命令能创建、查看和提取tar压缩文件。tar -cvf 是创建对应压缩文件，tar -tvf 来查看对应压缩文件，tar -xvf 来提取对应压缩文件

ps命令:列出系统中当前运行的进程
    ps -a  显示所有终端下执行的进程，包含其他用户的进程
    ps -A  显示所有进程
    ps -e  和-A功能一样
    ps -H  显示树状结构，表示程序间的相互关系
    ps -f  全格式显示进程

    ps a   显示当前终端下执行的进程
    ps c   显示进程的真实名称
    ps e   列出程序所使用的环境变量
    ps f   用ASCII字符显示树状结构，表达程序间的相互关系
    ps x   显示所有进程，无论是否运行在终端上
    ps u   显示用户相关的进程或者与用户相关的属性
    ps r   只显示正在运行的进程

        ps -ax 显示所有当前的进程,x参数会显示没有控制终端的进程，x参数表示显示所有进程，无论是否运行在终端上
        ps -ax | less 结合管道和less命令方便查看
        ps -aux | less 通过CPU和内存使用来过滤进程:查看当前时间点那个进程占用的资源最多

lsof（list open files）是一个列出当前系统打开文件的工具
  -a 列出打开文件存在的进程

  -c<进程名> 列出指定进程所打开的文件

  -g  列出GID号进程详情

  -d<文件号> 列出占用该文件号的进程

  +d<目录>  列出目录下被打开的文件

  +D<目录>  递归列出目录下被打开的文件

  -n<目录>  列出使用NFS的文件

  -i<条件>  列出符合条件的进程。（4、6、协议、:端口、 @ip ）

  -p<进程号> 列出指定进程号所打开的文件

  -u  列出UID号进程详情

  -h 显示帮助信息

  -v 显示版本信息
```
