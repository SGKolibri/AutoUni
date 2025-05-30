FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --ignore-scripts

# Copy prisma schema and generate
COPY prisma ./prisma/
RUN npx prisma generate

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Install production dependencies
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts

# Copy prisma schema
COPY prisma ./prisma/

# Create the src directory structure and generate client
RUN mkdir -p src
RUN npx prisma generate

# Copy built application
COPY --from=builder /app/dist ./dist

# Copy the generated client from src/generated to the location where compiled JS expects it
# The compiled JS in dist/utils/prisma.js looks for ../generated/prisma
RUN cp -r src/generated ./generated

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000

EXPOSE 10000

CMD ["node", "dist/app.js"]