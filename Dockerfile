FROM node:16.13.0 AS build

COPY package.json .
COPY package-lock.json .

WORKDIR /vite_demo

RUN npm config set registry https://registry.npmmirror.com

RUN npm install
COPY . .


RUN npm run build


FROM nginx:1.21

COPY --from=build /vite_demo/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173
