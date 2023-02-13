# Dockerfile

# base image
FROM node:alpine

RUN apk add --no-cache libc6-compat

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install --legacy-peer-deps

# start app
RUN npm run build
EXPOSE 5555
CMD npm run prod