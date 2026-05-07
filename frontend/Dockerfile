# Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production

# Serve Angular avec nginx
FROM nginx:alpine

COPY --from=build /app/dist/AngularProject/browser /usr/share/nginx/html

EXPOSE 80