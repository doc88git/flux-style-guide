FROM node:11.15-alpine

ENV YARN_VERSION 1.16.0

ENV HOST 0.0.0.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "storybook"]

