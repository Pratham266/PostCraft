# PostCraft - AI-Powered Social Media Post Generator

PostCraft is a comprehensive AI-powered social media post generation platform that creates engaging content across multiple platforms using Google's Gemini AI models.

## Features

- **AI-Powered Content Generation**: Uses Google Gemini 2.0 Flash for text generation
- **Multi-Platform Support**: Facebook, Instagram, LinkedIn, Twitter/X, WhatsApp
- **Media Generation**: 
  - Images using Imagen 3.0
  - Videos using Veo 3.0
  - Carousel posts with multiple images
- **Platform-Specific Optimization**: Automatically adapts content for each platform's guidelines
- **Multiple Variations**: Generate 1-5 creative variations of each post
- **Real-time Editing**: Edit captions, hashtags, and CTAs
- **Export Functionality**: Download complete post packages with media and metadata
- **Brand-Safe Content**: All generated content is filtered for brand safety

## Tech Stack

### Backend
- Node.js with Express
- MongoDB for data storage
- Google Gemini AI API
- JWT authentication
- File upload handling

### Frontend
- React with Vite
- Redux for state management
- Tailwind CSS for styling
- Axios for API communication

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Google AI API key

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
MONGODB_URI=mongodb://localhost:27017/postcraft
JWT_SECRET=your_jwt_secret_here
GOOGLE_API_KEY=your_google_api_key_here
PORT=3001
NODE_ENV=development
```

5. Start the backend server:
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

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
VITE_API_URL=http://localhost:3001/api
```

5. Start the frontend development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Posts
- `POST /api/posts/generate` - Generate AI posts
- `POST /api/posts/regenerate/:variationId` - Regenerate specific variation
- `PUT /api/posts/edit/:variationId/:platform` - Edit caption for platform
- `POST /api/posts/export` - Export posts package
- `GET /api/posts/guidelines` - Get platform guidelines

## Usage

1. **Create Account**: Register or login to access the dashboard
2. **Enter Post Idea**: Describe what you want to post about
3. **Select Post Type**: Choose between image, carousel, or video
4. **Choose Platforms**: Select which social media platforms to target
5. **Configure Settings**: Set category, unified style, and number of variations
6. **Generate**: Click "Generate AI Posts" to create content
7. **Review & Edit**: View platform-specific previews and edit as needed
8. **Export**: Download complete post packages with media and metadata

## Platform Guidelines

The system automatically enforces platform-specific guidelines:

- **Facebook**: 2200 char limit, 30 hashtags max, conversational style
- **Instagram**: 2200 char limit, 30 hashtags max, visual/aesthetic style
- **LinkedIn**: 3000 char limit, 5 hashtags max, professional style
- **Twitter**: 280 char limit, 5 hashtags max, concise style
- **WhatsApp**: 1000 char limit, 10 hashtags max, personal style

## File Structure

```
PostCraft/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── uploads/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── store/
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@postcraft.ai or create an issue in the repository.
