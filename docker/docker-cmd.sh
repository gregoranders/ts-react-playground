#!/usr/bin/env sh

set -e

# terminate() {
#   killall -12 node 2>/dev/null
#   kill -12 "$child" 2>/dev/null
# }

# trap terminate SIGTERM

cd /var/www/localhost/htdocs
/opt/livereload/bin/livereload.js . -u poll -d
# nginx -g 'daemon off;' &

# child=$!
# wait "$child"

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:


