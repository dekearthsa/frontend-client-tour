# FROM node:lts-alpine
# # RUN npm install -g http-server
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# # RUN npm run build
# # EXPOSE 5144
# # CMD ["http-server", "-p 5172","dist"]
# CMD ["npm", "run", "start"]

FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build /usr/src/app
RUN npm install -g http-server
EXPOSE 5144
CMD ["http-server", "-p", "5144"]
