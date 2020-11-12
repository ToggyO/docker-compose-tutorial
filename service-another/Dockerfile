FROM node:14.15.0
WORKDIR /usr/app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --silent --production
COPY ./ ./
CMD npm start