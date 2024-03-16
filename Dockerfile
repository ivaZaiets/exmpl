# # Stage 1: Build React app
# FROM node:18 as build
# WORKDIR ./
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# CMD ["npm", "run", "start", "--", "--host"]

# Stage 1: Build the SSR React app
FROM node:latest AS build
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Build the client-side and server-side parts of the app
RUN npm run build
# Stage 2: Serve the SSR React app
FROM node:latest
# Set the working directory in the container
WORKDIR /app
# Copy the built files from the previous stage
COPY --from=build /app/dist /app/dist
# Expose the port your server listens on
EXPOSE 5173
# Command to run your SSR React app
CMD ['npm', 'run', 'start']
