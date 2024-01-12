docker run \
 --name postgres \
 -e POSTGRES_USER=vitorgoto \
 -e POSTGRES_PASSWORD=tatupeba21 \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres

docker exec -it postgres /bin/bash
docker ps

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

------------------------------------------mongodb

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=tatupeba21 -d mongo

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongosh --host localhost -u admin -p tatupeba21 --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'vitorgoto', pwd:'tatupeba21', roles: [{role: 'readWrite', db:'herois'}]})"
