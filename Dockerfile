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

# Expose port 80 for web traffic
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]