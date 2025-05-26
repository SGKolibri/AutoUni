# AutoUni Backend

Backend API for the AutoUni application.

## Local Development

1. Install dependencies:

   ```
   npm install
   ```

2. Create a `.env` file based on `.env.example` and configure your environment variables.

3. Run the development server:

   ```
   npm run dev
   ```

4. Access the API documentation at http://localhost:4567/docs/static/index.html

## Deployment on Render

### Option 1: Web Service (recommended)

1. Create a new Web Service on Render
2. Connect your repository
3. Use the following settings:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Add the following environment variables:
   - `NODE_ENV`: production
   - `JWT_SECRET`: your-secret-jwt-key
   - `DATABASE_URL`: your-postgres-connection-string

### Option 2: Using Docker

1. Create a new Web Service on Render using Docker
2. Connect your repository
3. Render will automatically use the Dockerfile in your project
4. Add the necessary environment variables in the Render dashboard

## Database Setup

The application uses PostgreSQL. You can:

1. Use Render's PostgreSQL service
2. Connect to an external PostgreSQL database

After connecting your database, Prisma will automatically apply migrations when deployed.
