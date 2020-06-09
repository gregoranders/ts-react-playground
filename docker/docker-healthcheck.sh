#!/usr/bin/env sh

set -e

HOSTNAME="$(hostname || echo '127.0.0.1')"

curl -f "https://${HOSTNAME}/#/" ; exit $?

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:

