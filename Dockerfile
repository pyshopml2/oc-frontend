FROM node:alpine

RUN apk add --no-cache --update make gcc g++ libc-dev libpng-dev automake autoconf libtool

WORKDIR /app
COPY . /app
EXPOSE 3000
RUN yarn install

CMD ["yarn", "start"]
