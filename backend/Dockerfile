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

# Create the directory structure and copy the generated client
RUN mkdir -p generated/prisma

# Copy from the correct location
RUN cp -r src/generated/prisma/* generated/prisma/

# DEBUG: Check the compiled prisma.js file to see what it's trying to import
RUN echo "=== Checking compiled prisma.js ===" && cat dist/utils/prisma.js

# DEBUG: Check current directory structure from dist perspective
RUN echo "=== Directory structure from /app ===" && ls -la
RUN echo "=== Directory structure from /app/dist ===" && ls -la dist/
RUN echo "=== What ../generated/prisma resolves to from dist/utils/ ===" && \
    cd dist/utils && ls -la ../../generated/prisma/ || echo "Path not found"

# Make sure the path is correct
RUN echo "=== Verifying path from dist/utils to generated/prisma ===" && \
    cd dist/utils && test -f ../../generated/prisma/index.js && echo "Path is correct" || echo "Path is wrong"

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000

EXPOSE 10000

CMD ["node", "dist/app.js"]