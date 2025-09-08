const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');
const {
  saveAllPostToLibrary,
  getAllPostsFromLibrary,
} = require('../controllers/libraryController');

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Generate AI-powered posts
router.post('/generate-text', postController.generatePosts);
router.post('/generate-media', postController.generateMedia);

//store to library
router.post('/saveToLibrary', saveAllPostToLibrary);
router.get('/getPosts', getAllPostsFromLibrary);

module.exports = router;
