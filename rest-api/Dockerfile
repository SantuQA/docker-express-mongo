FROM node:14

WORKDIR /rest-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start
