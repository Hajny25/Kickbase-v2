# Use an official Node.js runtime as the base image
FROM node:20.4.0-alpine3.17 AS build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build
RUN npm prune --production


FROM node:20.4.0-alpine3.17 AS serve

WORKDIR /app
# Copy the app from the build stage
COPY --from=build app/package.json .
COPY --from=build app/node_modules ./node_modules
COPY --from=build app/build ./build

# Expose port 3000 for the application
EXPOSE 3000

ENV ORIGIN=https://kickbase.switzerlandnorth.cloudapp.azure.com

CMD ["node", "build"]