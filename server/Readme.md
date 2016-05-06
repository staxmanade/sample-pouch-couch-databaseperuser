:warning::warning::warning: update or figure out a better password strategy than storing plain text in `config/couchdb/local.ini` :warning::warning::warning:

# docker build

docker build -t couchdbperuser .

# docker run

docker run -d -p 5984:5984 --name couchdbperuser -v $(pwd)/couchdb-data:/usr/local/var/lib/couchdb couchdbperuser

# test that it's running

curl http://$(docker-machine ip default):5984 -v

> NOTE: The above command assumes you're using the `default` docker container

