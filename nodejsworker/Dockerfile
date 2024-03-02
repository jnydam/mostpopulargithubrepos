# FROM --platform=amd64 node:18-alpine

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8081

CMD ["node", "dist/app.js"]