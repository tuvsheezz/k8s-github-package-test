FROM node:18.18.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
ENV PORT=8080
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "prod"]