const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Generate AI-powered posts
router.post('/generate-text', postController.generatePosts);
router.post('/generate-media', postController.generatePosts);

module.exports = router;
