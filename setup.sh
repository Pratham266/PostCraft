#!/bin/bash

echo "�� Setting up PostCraft - AI-Powered Social Media Post Generator"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Check if MongoDB is running
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB."
    echo "   Visit: https://docs.mongodb.com/manual/installation/"
fi

echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install

echo ""
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install

echo ""
echo "🔧 Setting up environment files..."

# Backend .env
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env file"
    echo "⚠️  Please update backend/.env with your configuration:"
    echo "   - MONGODB_URI"
    echo "   - JWT_SECRET"
    echo "   - GOOGLE_API_KEY"
else
    echo "✅ Backend .env file already exists"
fi

# Frontend .env
if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ Created frontend/.env file"
    echo "⚠️  Please update frontend/.env with your configuration:"
    echo "   - VITE_API_URL"
else
    echo "✅ Frontend .env file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update your .env files with the required configuration"
echo "2. Start MongoDB (if not already running)"
echo "3. Start the backend: cd backend && npm run dev"
echo "4. Start the frontend: cd frontend && npm run dev"
echo ""
echo "📚 For detailed setup instructions, see README.md"
