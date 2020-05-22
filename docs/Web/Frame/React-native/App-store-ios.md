---
title: ios app的那些事儿
---

> 2019.11.22

## 通过三方上线 ios app

- 流程

  1. 打包的时候选择 Ad Hoc 的方式

  2. 选择靠谱的三方服务,我司是主管去弄这些的,我负责开发下载页,(蒲公英最近不行了...)

  3. 使用 itms-services 协议来发布 ipa 文件,苹果允许用 itms-services 协议来直接在 iphone/ipad 上安装应用程序，我们可以直接生成该协议需要的相关文件，我们需要两个文件，一个是 ipa，另一个是 plist
     我们的 a 标签，插入网页点击安装

     ```HTML
       <a href="itms-services://?action=download-manifest&url=https://xxx/app.plist"
         >download</a
       >
     ```

     plist 文件，里面一些字段根据自己项目去配置

     ```XML
     <?xml version="1.0" encoding="UTF-8"?>
     <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
     <plist version="1.0">
       <dict>
         <key>items</key>
         <array>
           <dict>
             <key>assets</key>
             <array>
               <dict>
                 <key>kind</key>
                 <string>software-package</string>
                 <key>url</key>
                 <string>https://xxx.com/xx.ipa</string>
               </dict>
             </array>
             <key>metadata</key>
             <dict>
               <key>bundle-identifier</key>
               <string>bundle ID (和ipa保持一致)</string>
               <key>bundle-version</key>
               <string>版本号</string>
               <key>kind</key>
               <string>software</string>
               <key>subtitle</key>
               <string>app名字</string>
               <key>title</key>
               <string>app名字</string>
             </dict>
           </dict>
         </array>
       </dict>
     </plist>

     ```

- 要注意的一些问题,过程还是很简洁的,主要还是需要注意很多问题,不然实现不了效果,同时不好调试，很难定位问题

  1. 必须采用非自签名的 SSL 证书,所以无法本地调试

  2. plist 和 ipa 文件 MIME 媒体类型更改
     - plist 文件改成 application/xml
     - ipa 文件改成 application/octet-stream (一般默认是这个)
