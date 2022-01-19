#!/bin/bash

if [[ $1 == 'dev' ]]; then
    if [[ $2 == 'docker' ]]; then
        docker build -t groundup-web:dev .
        docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true groundup-web:dev
    else
        docker-compose up -d --build
    fi
else
    if [[ $2 == 'docker' ]]; then
        docker build -f Dockerfile.prod -t groundup-web:prod .
        docker run -it --rm -p 1337:80 groundup-web:prod
    else
        docker-compose -f docker-compose.prod.yml up -d --build
    fi
fi