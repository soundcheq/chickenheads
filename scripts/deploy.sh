#/!bin/sh

if [ "$TRAVIS_PULL_REQUEST" != true ]; then

cd /FUTURE/PROJECT/DIRECTORY

git checkout $1
git pull

docker build -f Dockerfile-node-prod -t soundcheq-node-image .
docker rm -f soundcheq-node-container
docker run -d -p 3001:3001 --restart always --name="soundcheq-node-container" -i soundcheq-node-image
docker container prune -f
docker image prune -f

fi