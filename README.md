# Node.js Template Project with MySQL

This is a template project structure for Node.js backend development using MySQL as the database.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and provide the necessary environment variables:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `JWT_SECRET`
   - `PORT`
4. Start the server:
   - `npm start` (for production)
   - `npm run dev` (for development)

## Features

- Express.js for creating API routes
- MySQL with Sequelize ORM
- JWT Authentication middleware
- Basic controller-service-repository architecture
- Winston for logging

## Routes

- `GET /api/example`: Get all example data (Protected route)
