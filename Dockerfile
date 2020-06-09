FROM alpine:latest

COPY ./docker/docker-entrypoint.sh ./docker/docker-cmd.sh \
  ./docker/docker-healthcheck.sh \
  ./docker/fritz.box.crt ./docker/fritz.box.pem \
  ./docker/development.fritz.box.crt ./docker/development.fritz.box.key /

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

COPY ./public/ /var/www/localhost/htdocs/

RUN set -ex && \
  chmod +x -v /docker-entrypoint.sh && \
  chmod +x -v /docker-cmd.sh && \
  chmod +x -v /docker-healthcheck.sh && \
  apk upgrade --update && \
  apk add nodejs && \
  apk add --virtual build-dependencies nodejs-npm git && \
  npm install -g livereloadx && \
  apk del build-dependencies && \
  apk add nginx nginx-mod-http-xslt-filter nginx-mod-http-upload-progress curl ca-certificates && \
  mkdir -pv /usr/local/share/ca-certificates && \
  cp -v /fritz.box.crt /usr/local/share/ca-certificates/ && \
  chmod 644 /usr/local/share/ca-certificates/* && \
  update-ca-certificates && \
  mv -v /fritz.box.crt /etc/nginx/ && \
  mv -v /fritz.box.pem /etc/nginx/ && \
  mv -v /development.fritz.box.crt /etc/nginx/ && \
  mv -v /development.fritz.box.key /etc/nginx/ && \
  rm -rf /tmp/* /var/cache/apk/*

EXPOSE 80 443

STOPSIGNAL SIGTERM

ENTRYPOINT ["/docker-entrypoint.sh"]

HEALTHCHECK CMD ["/docker-healthcheck.sh"]

VOLUME ["/var/www/localhost/htdocs/"]

CMD ["nginx", "-g", "daemon off;"]

