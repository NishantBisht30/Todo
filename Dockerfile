FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY ./client/package.json .
COPY ./client/package-lock.json .
RUN npm install
COPY ./client/. .
EXPOSE 3000
CMD [ "npm", "start" ]