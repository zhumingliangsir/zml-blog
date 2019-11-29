---
title: 基本配置
---

## 1、启动

```js
upstream zml.com {
 server 192.168.11.11:10011;
 server 192.168.11.12:10012;
 server 192.168.11.13:10013;
 }

server {
    listen       8090;
    try_files $uri $uri/ /index.html;  //关键配置
    server_name  localhost;

    location / {
        root /home/module/zml/front;
        index index.html;
        add_header  Cache-Control no-store;
    }


	location ^~ /service {
		proxy_pass  http://zml.com/;
		proxy_redirect      default;
		proxy_set_header    X-Real-IP $remote_addr;
		proxy_set_header    X-Forwarded-Host $remote_addr;
			X-Forwarded-Server $remote_addr;
		proxy_set_header    X-Forwarded-For  $remote_addr;
		client_max_body_size 50m;
		client_body_buffer_size 256k;
		proxy_connect_timeout 60;
		proxy_send_timeout 30;
		proxy_read_timeout 300;
		proxy_buffer_size 256k;
		proxy_buffers 4 256k;
		proxy_busy_buffers_size 256k;
		proxy_temp_file_write_size 256k;
		proxy_next_upstream error timeout invalid_header http_500 http_503 http_404;
		proxy_max_temp_file_size 128m;
	}
}

```
