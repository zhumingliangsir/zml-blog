(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{221:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、启动"}},[s._v("#")]),s._v(" 1、启动")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("upstream zml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10011")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10012")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10013")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    try_files $uri $uri"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关键配置")]),s._v("\n    server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("front"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        add_header  Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control no"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n\tlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tproxy_pass  http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/zml.com/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_redirect      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_set_header    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_set_header    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Host $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Server $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_set_header    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For  $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tclient_max_body_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tclient_body_buffer_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_send_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_read_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_buffer_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_buffers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_busy_buffers_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_temp_file_write_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_next_upstream error timeout invalid_header http_500 http_503 http_404"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tproxy_max_temp_file_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);