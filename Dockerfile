FROM node:16
WORKDIR /app
COPY package.json .
# RUN ["apt-get", "update"]
# RUN ["apt-get", "install", "-y", "vim"]
# RUN ["apt-get", "install", "-y", "git-all"]
RUN npm install
COPY . .
EXPOSE 8081
CMD ["npm", "run", "start"]
ENV TZ=Asia/Manila
# CMD ["node", "index.js"]