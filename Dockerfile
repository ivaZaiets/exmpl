# Stage 1: Build React app
FROM node:18 as build
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]
