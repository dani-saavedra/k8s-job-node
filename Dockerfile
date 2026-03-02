FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY app.js .

RUN npm install --omit=dev

CMD ["node", "app.js"]