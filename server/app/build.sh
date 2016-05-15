pushd client
jspm bundle app --inject
popd

docker stop superloginserver;
docker rm superloginserver;

docker build -t superloginserver . && \
docker run -d -p 8080:3000 -p 5858:5858 --name superloginserver -v $(pwd)/:/var/www/app/current superloginserver
