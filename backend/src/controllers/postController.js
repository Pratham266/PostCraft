const aiService = require('../services/aiService');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Generate AI-powered posts
const generatePosts = async (req, res) => {
  try {
    const { postIdea, postType, selectedPlatforms, category, unifiedStyle } =
      req.body;

    // if you want to create multiple variations, you can take change the postVariation from the req.body
    const postVariation = 1;

    // Validate required fields
    if (
      !postIdea ||
      !postType ||
      !selectedPlatforms ||
      selectedPlatforms.length === 0
    ) {
      return res.status(400).json({
        success: false,
        error:
          'Missing required fields: postIdea, postType, and selectedPlatforms are required',
      });
    }

    // Validate post type
    const validPostTypes = ['image', 'carousel', 'video'];
    if (!validPostTypes.includes(postType)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid post type. Must be one of: image, carousel, video',
      });
    }

    // Validate platforms
    const validPlatforms = [
      'facebook',
      'instagram',
      'linkedin',
      'twitter',
      'whatsapp',
    ];
    const invalidPlatforms = selectedPlatforms.filter(
      (platform) => !validPlatforms.includes(platform)
    );
    if (invalidPlatforms.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Invalid platforms: ${invalidPlatforms.join(', ')}`,
      });
    }

    // Validate post variation count
    if (postVariation < 1 || postVariation > 5) {
      return res.status(400).json({
        success: false,
        error: 'Post variation must be between 1 and 5',
      });
    }

    console.log('Generating posts with data:', {
      postIdea,
      postType,
      selectedPlatforms,
      category,
      unifiedStyle,
      postVariation,
    });

    // Generate posts using AI service
    const result = await aiService.generatePosts({
      postIdea,
      postType,
      selectedPlatforms,
      category: category || 'General',
      unifiedStyle: unifiedStyle || false,
      postVariation: postVariation || 1,
    });

    if (!result.success) {
      return res.status(500).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('Error in generatePosts controller:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while generating posts',
    });
  }
};

module.exports = {
  generatePosts,
};
