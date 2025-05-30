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

# Copy prisma schema and generate
COPY prisma ./prisma/
RUN mkdir -p src
RUN npx prisma generate

# Copy built application
COPY --from=builder /app/dist ./dist

# Copy the generated client
RUN mkdir -p generated/prisma
RUN cp -r src/generated/prisma/* generated/prisma/

# Create a symbolic link from the src directory to ensure all paths work
RUN ln -sf /app/generated src/generated

# Also create the alternative path that the compiled code might be looking for
RUN mkdir -p dist/generated && ln -sf /app/generated/prisma dist/generated/prisma

# Verify all possible paths
RUN ls -la generated/prisma/index.js
RUN ls -la dist/generated/prisma/index.js
RUN cd dist/utils && ls -la ../../generated/prisma/index.js

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000

EXPOSE 10000

CMD ["node", "dist/app.js"]