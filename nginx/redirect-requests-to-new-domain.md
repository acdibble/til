# Redirect requests to new domain

nginx makes it easy to redirect all requests to a different domain:

```
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name domain.com www.domain.com;
    return 301 https://otherdomain.com;
}
```

[source](https://linuxhint.com/redirect_urls_nginx/)
