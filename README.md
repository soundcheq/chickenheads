# soundcheq

## Pre Requirements

- Download `Docker for Mac`
  - https://store.docker.com/editions/community/docker-ce-desktop-mac

## Start a development server

- Navigate a terminal to the root of the project
- `touch .env`
- Copy the contents of `.env_sample` into `.env`
- Run `docker-compose up` when in the root of the project
  - Ports 5433 (PSQL), 3000 (React), and 3001 (Node) must be free on your machine

## Test your development server

- Go to `localhost:3000/dashboard` in a browser.
- Go to `localhost:3001/dashboard` in a browser.
- Send a `GET` request to `localhost:3001/api/test`.

All three must work to confirm a successful development environment
