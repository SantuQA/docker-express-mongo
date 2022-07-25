FROM node:16-bullseye-slim

WORKDIR /rest-api
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev
