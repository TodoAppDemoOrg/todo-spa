# Attention! The file is invalid and needs to be updated!
FROM node:18-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json /app

RUN npm install
COPY . /app

CMD node server.js
