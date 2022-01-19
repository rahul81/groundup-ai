#!/bin/bash

if [[ $1 == 'dev' ]]; then
    if [[ $2 == 'docker' ]]; then
        echo 'running docker build&run using dev environment'
        docker build -t groundup-web:dev .
        docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true groundup-web:dev
    else
        echo 'running docker compose using dev environment'
        docker-compose up -d --build
    fi
else
    if [[ $2 == 'docker' ]]; then
        echo 'running docker build&run using prod environment'
        docker build -f Dockerfile.prod -t groundup-web:prod .
        docker run -it --rm -p 1337:80 groundup-web:prod
    else
        echo 'running docker compose using prod environment'
        docker-compose -f docker-compose.prod.yml up -d --build
    fi
fi