const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken } = require('../middleware/auth');

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Generate AI-powered posts
router.post('/generate', postController.generatePosts);

// Regenerate specific variation
router.post('/regenerate/:variationId', postController.regenerateVariation);

// Edit caption for specific platform
router.put('/edit/:variationId/:platform', postController.editCaption);

// Export posts package
router.post('/export', postController.exportPosts);

// Get platform guidelines
router.get('/guidelines', postController.getPlatformGuidelines);

module.exports = router;
