# Stage 1: Build the React application on the GitHub Runner / Docker Host
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the static assets
COPY . .
RUN npm run build

# Stage 2: Serve the built static files using a lightweight Nginx web server
FROM nginx:alpine

# Copy built production assets from Stage 1 into Nginx public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx configuration into the container
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Nginx listens on ports 80 (HTTP) and 443 (HTTPS) inside the container
EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]