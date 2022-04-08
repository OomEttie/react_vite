FROM node:15.12.0

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["vite"]