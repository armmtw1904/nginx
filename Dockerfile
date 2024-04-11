FROM nginx:alpine
WORKDIR /app
COPY auth.js /etc/nginx
COPY nginx.config /etc/nginx/nginx.conf