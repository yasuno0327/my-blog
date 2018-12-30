FROM golang:1.11

ENV GO111MODULE=on

RUN apt-get update -qq && \
  apt-get -q -y install mysql-client

RUN mkdir -p /go/src/api
WORKDIR /go/src/api

ADD . /go/src/api
RUN go get -u