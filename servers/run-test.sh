./build.sh
sleep 2 &&
curl http://$(docker-machine ip default):80

pushd test;
npm test;
popd;
