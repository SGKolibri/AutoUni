FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for efficient caching
COPY package*.json ./


RUN npm ci --ignore-scripts

# Copy prisma schema for generation
COPY prisma ./prisma/


RUN npx prisma generate

# Copy source code
COPY . .

# Build the application (if using TypeScript)
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000

# Expose port
EXPOSE 10000

# Start command
CMD ["node", "dist/app.js"]