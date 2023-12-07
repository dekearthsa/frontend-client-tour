FROM node:lts-alpine
# RUN npm install -g http-server
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build
# EXPOSE 5144
# CMD ["http-server", "-p 5172","dist"]
CMD ["npm", "run", "start"]