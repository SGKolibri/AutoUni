FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Generate Prisma client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
ENV PORT=10000
EXPOSE 10000

# Start the application
CMD ["npm", "start"]
