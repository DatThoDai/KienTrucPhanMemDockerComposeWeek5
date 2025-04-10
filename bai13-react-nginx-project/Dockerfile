FROM node:18 AS build
WORKDIR /app
COPY app/package.json .
RUN npm install
COPY app/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf