docker stop couchdbperuser;
docker rm couchdbperuser;

docker build -t couchdbperuser . && \
docker run -d -p 5984:5984 --name couchdbperuser -v $(pwd)/couchdb-data:/usr/local/var/lib/couchdb couchdbperuser
