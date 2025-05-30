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

# Debug: Check what was generated
RUN echo "=== Checking src directory ===" && ls -la src/ || echo "src directory not found"
RUN echo "=== Checking src/generated ===" && ls -la src/generated/ || echo "src/generated not found"
RUN echo "=== Checking prisma output location ===" && find . -name "*.prisma" -type f
RUN echo "=== Checking for prisma client ===" && find . -name "index.js" | grep -i prisma

# Create the directory structure and copy the generated client
RUN mkdir -p generated/prisma

# Try multiple possible locations for the generated client
RUN if [ -d "src/generated/prisma" ]; then \
      echo "Copying from src/generated/prisma"; \
      cp -r src/generated/prisma/* generated/prisma/; \
    elif [ -d "node_modules/.prisma/client" ]; then \
      echo "Copying from node_modules/.prisma/client"; \
      cp -r node_modules/.prisma/client/* generated/prisma/; \
    else \
      echo "ERROR: Prisma client not found in any expected location"; \
      echo "Available directories:"; \
      find . -type d -name "*prisma*"; \
      exit 1; \
    fi

# Verify the copy worked
RUN echo "=== Final verification ===" && ls -la generated/
RUN echo "=== Generated prisma contents ===" && ls -la generated/prisma/

# Set environment variables
ENV NODE_ENV=production
ENV PORT=10000

EXPOSE 10000

CMD ["node", "dist/app.js"]