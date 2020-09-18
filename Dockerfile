FROM nginx:1.9.15-alpine
COPY ./build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
