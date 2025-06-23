# Dockerfile

# Use an existing node alpine image as a base image.
FROM node:alpine

# Install Python and other necessary tools
RUN apk add --no-cache python3 make g++

# Set the working directory.
WORKDIR /app

# Copy the package.json file.
COPY package.json .

# Copy the package-lock.json file.
COPY yarn.lock .

# Install application dependencies.
RUN yarn

# Copy the rest of the application files.
COPY . .

# Expose the port.
EXPOSE 3030

# Clean old dist
RUN rm -rf dist

# Build
RUN yarn build

# Run migrations and start the app
CMD ["yarn", "start:prod"]