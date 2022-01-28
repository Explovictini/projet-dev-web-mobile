#stage 1
FROM nginx:1.17.1-alpine
COPY /dist/projet /usr/share/nginx/html
