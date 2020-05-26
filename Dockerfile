FROM node:13.3-alpine

ENV YARN_VERSION 1.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn docs:build

# static file will be in docs/.vuepress/dist
