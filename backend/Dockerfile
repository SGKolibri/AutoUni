# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have it)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate Prisma client (optional but recommended for production)
RUN npx prisma generate

# Expose your app's port (adjust if your app runs on a different port)
EXPOSE 3000

# Start your app
CMD ["npm", "start"]
