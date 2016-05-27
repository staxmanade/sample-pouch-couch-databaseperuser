FROM couchdb

MAINTAINER Jason Jarrett jason@elegantcode.com

COPY local.ini /usr/local/etc/couchdb/

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
