FROM node:12-alpine
# RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -

# ADD https://dl.yarnpkg.com/debian/pubkey.gpg /tmp/yarn-pubkey.gpg
# RUN apt-key add /tmp/yarn-pubkey.gpg && rm /tmp/yarn-pubkey.gpg
# RUN echo 'deb http://dl.yarnpkg.com/debian/ stable main' > /etc/apt/sources.list.d/yarn.list

WORKDIR /app
COPY package.json /app 
COPY yarn.lock /app

# RUN [ "/bin/bash", "-c", "yarn install --pure-lockfile 2> >(grep -v warning 1>&2) && mv node_modules ../"]

# ENV PATH /usr/node_modules/.bin:$PATH

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .
ENTRYPOINT ["/entrypoint.sh"]

RUN yarn
CMD ["yarn", "dev"]

