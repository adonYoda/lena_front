FROM --platform=linux/amd64 node:lts-alpine

EXPOSE 3000

RUN mkdir -p frontend_accounting

WORKDIR /usr/src/frontend-accounting

COPY . /usr/src/frontend-accounting/

RUN npm i --force

RUN npm run build

CMD ["npm","run","start"]
