docker stop couchdbperuser; \
docker rm couchdbperuser; \
docker build -t couchdbperuser . && \
docker run -d -p 5984:5984 --name couchdbperuser -v $(pwd)/couchdb-data:/usr/local/var/lib/couchdb couchdbperuser && \
docker ps && \
sleep 2 &&
curl http://$(docker-machine ip default):5984

pushd test;
npm test;
popd;
