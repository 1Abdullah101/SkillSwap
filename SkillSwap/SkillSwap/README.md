# SkillSwap

A full-stack application built with React.js, Node.js, Express, and MySQL.

## Project Structure

```
skillswap/
├── frontend/          # React.js frontend application
├── backend/           # Node.js backend server
└── README.md         # Project documentation
```

## Prerequisites

- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=skillswap_db
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Modern React.js frontend with Vite
- RESTful API backend with Express
- MySQL database integration
- User authentication and authorization
- Secure password handling
- Environment variable configuration
- Development and production builds

## Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- React Query

### Backend
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- Bcrypt for password hashing
- CORS enabled
- Environment variables with dotenv

## Development

- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:5173

## License

MIT 