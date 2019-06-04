FROM nginx:1.16-alpine

COPY ./storybook-static /usr/share/nginx/html

EXPOSE 80