FROM node:14.4.0 as node
FROM ruby:2.7.1

WORKDIR /app

COPY --from=node /usr/local/bin/node /usr/local/bin/

RUN curl -0 -L https://npmjs.org/install.sh | sh

ENV BUNDLER_VERSION 2.1.4
ENV YARN_VERSION 1.22.5

RUN gem install bundler --version ${BUNDLER_VERSION} \
  && npm update \
  && npm install -g npm yarn@${YARN_VERSION}

EXPOSE 3000

CMD ["/bin/sh"]
