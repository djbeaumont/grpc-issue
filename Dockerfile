FROM ubuntu
EXPOSE 4000

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y python
RUN apt-get install -y make
RUN apt-get install -y g++
RUN npm install -g pm2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
