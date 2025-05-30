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

### Option 1: Using Blueprint (recommended)

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. In Render dashboard, click "New" and select "Blueprint"
3. Connect your Git repository
4. Render will detect the `render.yaml` file and configure the services
5. Set up your environment variables:
   - `JWT_SECRET`: a secure random string
   - `DATABASE_URL`: your Render PostgreSQL connection string

### Option 2: Web Service (manual setup)

1. Create a new Web Service on Render
2. Connect your repository
3. Use the following settings:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build && npm run db:deploy`
   - **Start Command**: `npm start`
4. Add the following environment variables:
   - `NODE_ENV`: production
   - `PORT`: 10000
   - `JWT_SECRET`: your-secret-jwt-key
   - `DATABASE_URL`: your-postgres-connection-string

### Option 3: Using Docker (recommended for production)

1. Create a new Web Service on Render
2. Connect your repository
3. Select "Docker" as the environment
4. Leave "Dockerfile Path" as default (./Dockerfile)
5. Add the following environment variables:
   - `NODE_ENV`: production
   - `PORT`: 10000
   - `JWT_SECRET`: your-secure-jwt-secret
   - `DATABASE_URL`: your-postgres-connection-string
6. Click "Create Web Service"
7. Connect your repository
8. Render will automatically use the Dockerfile in your project
9. Add the necessary environment variables in the Render dashboard

## Database Setup

The application uses PostgreSQL. You can:

1. Use Render's PostgreSQL service (recommended):

   - From Render dashboard, click "New" and select "PostgreSQL"
   - Configure your database name, user, and region
   - Select the appropriate plan (there's a free tier available)
   - After creation, Render provides a `DATABASE_URL` to use in your web service

2. Connect to an external PostgreSQL database:
   - Use any PostgreSQL provider (AWS, Digital Ocean, etc.)
   - Set the `DATABASE_URL` environment variable in your Render web service

## Post-Deployment

After deployment, Prisma migrations will run automatically during the build process. Visit your deployed application at the URL provided by Render and check that everything is working properly.

After connecting your database, Prisma will automatically apply migrations when deployed.
