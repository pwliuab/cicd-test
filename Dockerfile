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

COPY cloudflare_paulliu.crt /etc/ssl/certs/cloudflare_paulliu.crt
COPY cloudflare_paulliu.key /etc/ssl/private/cloudflare_paulliu.key

# Copy custom Nginx configuration into the container
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Nginx listens on port 80 inside the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]