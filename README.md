# PostCraft

A modern full-stack web application built with React, Redux Toolkit, Express.js, and MongoDB.

## Project Structure

```
PostCraft/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── lib/           # API configuration and utilities
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json
├── backend/           # Express.js + MongoDB backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Data models (schema-less)
│   │   ├── middleware/    # Custom middleware
│   │   ├── utils/         # Database and utility functions
│   │   └── cli/           # CLI commands using coa
│   └── package.json
├── .gitignore
└── README.md
```

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client with interceptors
- **ESLint + Prettier** - Code linting and formatting

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Document database (native driver, no Mongoose)
- **coa** - CLI command builder
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Getting Started

### Prerequisites
- Node.js (v20.15.1 or higher)
- MongoDB (running locally or connection string)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PostCraft
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

### Environment Setup

1. Copy environment files:
```bash
# Frontend
cp frontend/.env.example frontend/.env

# Backend
cp backend/.env.example backend/.env
```

2. Update the environment variables in `.env` files as needed.

### Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:3001`

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

#### Production Mode

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Start the backend:
```bash
cd backend
npm start
```

## Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Backend Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run cli` - Run CLI commands
- `npm run seed` - Seed database with sample data

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## CLI Commands

The backend includes a CLI tool built with the `coa` library:

```bash
# Show version
npm run cli -- --version

# List all users
npm run cli -- user list

# Create a new user
npm run cli -- user create --name "John Doe" --email "john@example.com"

# Seed database with sample data
npm run seed
```

## Database

The application uses MongoDB with a schema-less, document-driven approach. No Mongoose is used - the native MongoDB driver is used directly for maximum flexibility.

### Sample User Document
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Development Guidelines

### Code Style
- Use ESLint and Prettier for consistent code formatting
- Follow React best practices and hooks patterns
- Use Redux Toolkit for state management
- Implement proper error handling and loading states

### API Design
- RESTful API design principles
- Consistent error response format
- Proper HTTP status codes
- Input validation and sanitization

### Database
- Schema-less approach for flexibility
- Consistent document structure
- Proper indexing for performance
- Data validation at the application level

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the ISC License.
