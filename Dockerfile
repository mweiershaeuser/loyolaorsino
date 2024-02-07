FROM node:16-alpine AS build
WORKDIR /loyolaorsino
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /loyolaorsino/dist/loyolaorsino usr/share/nginx/html
EXPOSE 80
