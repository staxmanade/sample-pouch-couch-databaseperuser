FROM couchdb

MAINTAINER Jason Jarrett jason@elegantcode.com

# copied from https://github.com/klaemo/docker-couchdb/blob/master/1.6.1-couchperuser/Dockerfile
ENV COUCHPERUSER_SHA 5d28db3272eea9619d4391b33aae6030f0319ecc54aa2a2f2b6c6a8d448f03f2
RUN apt-get update && apt-get install -y rebar make \
 && mkdir -p /usr/local/lib/couchdb/plugins/couchperuser \
 && cd /usr/local/lib/couchdb/plugins \
 && curl -L -o couchperuser.tar.gz https://github.com/etrepum/couchperuser/archive/1.1.0.tar.gz \
 && echo "$COUCHPERUSER_SHA *couchperuser.tar.gz" | sha256sum -c - \
 && tar -xzf couchperuser.tar.gz -C couchperuser --strip-components=1 \
 && rm couchperuser.tar.gz \
 && cd couchperuser \
 && make \
 && apt-get purge -y --auto-remove rebar make

# Node?
#RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -s stable
#RUN apt-get install -y nodejs

COPY config/couchdb/local.ini /usr/local/etc/couchdb/
