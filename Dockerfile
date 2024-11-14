FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]