# soundcheq

## Pre Requirements

- Download `Docker for Mac`
  - https://store.docker.com/editions/community/docker-ce-desktop-mac

## Start a development server

- Navigate a terminal to the root of the project
- `touch .env`
- Copy the contents of `.env_sample` into `.env`
- Run `docker-compose up` when in the root of the project
  - Ports `5433` (PSQL), `3000` (React), and `3001` (Node) must be free on your machine

## Test your development server

- Go to `localhost:3000/dashboard` in a browser (dev server).
- `cd` into the `public/` directory and run `yarn && yarn build`
- Go to `localhost:3001/dashboard` in a browser (production build).
- Send a `GET` request to `localhost:3001/api/test`.

All three must work to confirm a successful development environment

## Docker Caveats

### Adding new packages

During the docker build process it creates images to be used by the docker containers. The image build process is what runs `yarn` to install depedencies. In order to update packages in docker, you'll have to remove the image and re-build it.

You can also use a program called kitematic to launch a terminal inside the docker container. You can then run the `yarn add <package>` to install your package without re-building the image. However, any time the container restarts you'll have to re-run the `yarn add <package>` until the image is re-built.


## Docker Troubleshooting

If the project isn't working correctly try these Docker troubleshooting techniques.

* Close and re-open Docker using the icon in the menu bar
* Run these commands to get a fresh docker environment:
  * `docker rm -f $(docker ps -a -q)`
  * `docker rmi $(docker images -q)`
  * `docker volume prune -f`
  * `docker-compose up`
