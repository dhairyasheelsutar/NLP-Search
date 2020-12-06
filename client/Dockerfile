FROM node:14.1-alpine AS builder

WORKDIR /opt/web
COPY ./src ./src
COPY ./public ./public
COPY package.json ./
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD serve -s build