(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{227:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"crontab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[s._v("#")]),s._v(" crontab")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("vuepress 博客每次更新都比较麻烦,在服务器上有个脚本,但也得每次登录服务器运行,因此设置一个定时任务,每天晚上定时执行比较方便,在本地更新博客后推送 github 就好啦")])]),s._v(" "),n("li",[n("p",[s._v("安装")])])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install crontabs\n\nsystemctl enable crond #开机自启\n\nsystemctl start crond #启动\n\nsystemctl status crond #查看状态\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("编写定时任务")])]),s._v(" "),n("blockquote",[n("p",[s._v("1.vim /etc/crontab,会看到里面官方的注释")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Example of job definition:\n.---------------- minute (0 - 59)\n| .------------- hour (0 - 23)\n| | .---------- day of month (1 - 31)\n| | | .------- month (1 - 12) OR jan,feb,mar,apr ...\n| | | | .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat\n| | | | |\n* * * * * user-name command to be executed\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("2.详细配置信息")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[分钟] [小时] [日] [月] [星期(0-6)] [用户] [我们要执行的命令]\n\n# 事例\n*/30 * * * * root bash ~/build.sh # 每天，每 30分钟执行一次bash build.sh命令\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("p",[s._v("3.让我们的配置生效")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 生效\ncrontab /etc/crontab\n\n# 查看我们定时任务日志(配置出什么错能查看到详细信息)\ncat /var/log/cron\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"更多事例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多事例"}},[s._v("#")]),s._v(" 更多事例")]),s._v(" "),n("ul",[n("li",[s._v("每天凌晨两点执行命令")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0 2 * * * root ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("晚上 11 点到早上 8 点之间每两个小时")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0 23-7/2,8 * * * root ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("周一到周五每天晚上 11 点")])]),s._v(" "),n("div",{staticClass:"language-Shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0 23 * * 1-5 root ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);