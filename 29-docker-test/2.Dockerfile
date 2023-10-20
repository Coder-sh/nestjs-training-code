FROM node:latest

WORKDIR /abc

COPY . .

RUN npm install -g http-server

EXPOSE 8080

VOLUME /abc

CMD [ "http-server", "-p", "8080" ]