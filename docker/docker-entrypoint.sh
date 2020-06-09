#!/usr/bin/env sh

set -e

mkdir -p /var/run/nginx

SERVICE_HOST_URL="${SERVICE_HOST:=localhost:8080}"

sed -i "s|SERVICE_HOST_URL|${SERVICE_HOST_URL}|g" \
  /var/www/localhost/htdocs/index.html

exec "$@"

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:

