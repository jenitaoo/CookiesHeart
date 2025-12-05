# Use an official Node.js image as the base
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm install
 
# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the app
# FROM nginx:alpine

# Copy build files to the Nginx HTML folder
# COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 5173

# Start Nginx server
CMD ["npm", "run", "dev"]


