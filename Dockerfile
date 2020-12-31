# base image
FROM node:15.5-slim as build

# set working directory
WORKDIR /app

RUN chgrp -R 0 /app && chmod -R g+rwX /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
RUN npm install --silent

# add app
COPY angular.json .
COPY tsconfig.json .
COPY tsconfig.app.json /app
COPY /nginx/nginx.conf .
COPY /src ./src

# 'conf' value comes from .env file
ARG conf

# generate build
RUN npm run build:dev


# Nginx image
FROM nginx:1.18-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/glop /var/www/htdocs
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

RUN touch /var/run/nginx.pid

EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
