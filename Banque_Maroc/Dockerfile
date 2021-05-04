# pull the base image
FROM node:latest

# add app
WORKDIR /app

ADD *.json ./

RUN npm install

ADD . .

CMD npm run build