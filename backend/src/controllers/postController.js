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

// Regenerate specific variation
const regenerateVariation = async (req, res) => {
  try {
    const { variationId } = req.params;
    const { postIdea, postType, selectedPlatforms, category, unifiedStyle } =
      req.body;

    if (!postIdea || !postType || !selectedPlatforms) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields for regeneration',
      });
    }

    // Generate single variation
    const result = await aiService.generatePosts({
      postIdea,
      postType,
      selectedPlatforms,
      category: category || 'General',
      unifiedStyle: unifiedStyle || false,
      postVariation: 1,
    });

    if (!result.success) {
      return res.status(500).json(result);
    }

    // Return the first (and only) variation
    res.json({
      success: true,
      data: {
        variation: result.data.variations[0],
        metadata: result.data.metadata,
      },
    });
  } catch (error) {
    console.error('Error in regenerateVariation controller:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while regenerating variation',
    });
  }
};

// Edit caption for specific platform
const editCaption = async (req, res) => {
  try {
    const { variationId, platform } = req.params;
    const { caption, hashtags, cta } = req.body;

    if (!caption) {
      return res.status(400).json({
        success: false,
        error: 'Caption is required',
      });
    }

    // Validate platform
    const validPlatforms = [
      'facebook',
      'instagram',
      'linkedin',
      'twitter',
      'whatsapp',
    ];
    if (!validPlatforms.includes(platform)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid platform',
      });
    }

    // Get platform guidelines
    const guidelines = aiService.getPlatformGuidelines();
    const platformGuidelines = guidelines[platform];

    // Validate caption length
    if (caption.length > platformGuidelines.maxCaptionLength) {
      return res.status(400).json({
        success: false,
        error: `Caption too long. Maximum ${platformGuidelines.maxCaptionLength} characters for ${platform}`,
      });
    }

    // Validate hashtag count
    if (hashtags && hashtags.length > platformGuidelines.maxHashtags) {
      return res.status(400).json({
        success: false,
        error: `Too many hashtags. Maximum ${platformGuidelines.maxHashtags} hashtags for ${platform}`,
      });
    }

    res.json({
      success: true,
      data: {
        variationId,
        platform,
        caption,
        hashtags: hashtags || [],
        cta: cta || platformGuidelines.cta,
        characterCount: caption.length,
        updatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error in editCaption controller:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while editing caption',
    });
  }
};

// Export posts package
const exportPosts = async (req, res) => {
  try {
    const { variations, metadata } = req.body;

    if (!variations || !Array.isArray(variations)) {
      return res.status(400).json({
        success: false,
        error: 'Variations data is required',
      });
    }

    // Create export package structure
    const exportData = {
      metadata: {
        ...metadata,
        exportedAt: new Date().toISOString(),
        totalVariations: variations.length,
      },
      variations: variations.map((variation) => ({
        id: variation.id,
        postType: variation.postType,
        platforms: variation.platforms,
        media: variation.media,
        exportReady: true,
      })),
    };

    // Create ZIP file with all media and metadata
    const archive = archiver('zip', { zlib: { level: 9 } });

    res.attachment(`postcraft-export-${Date.now()}.zip`);
    archive.pipe(res);

    // Add metadata JSON
    archive.append(JSON.stringify(exportData, null, 2), {
      name: 'metadata.json',
    });

    // Add media files
    variations.forEach((variation) => {
      if (variation.media) {
        if (variation.media.images) {
          variation.media.images.forEach((image) => {
            if (fs.existsSync(image.filepath)) {
              archive.file(image.filepath, { name: `media/${image.filename}` });
            }
          });
        }
        if (variation.media.video) {
          if (fs.existsSync(variation.media.video.filepath)) {
            archive.file(variation.media.video.filepath, {
              name: `media/${variation.media.video.filename}`,
            });
          }
        }
      }
    });

    // Add platform-specific export files
    const platforms = [
      'facebook',
      'instagram',
      'linkedin',
      'twitter',
      'whatsapp',
    ];
    platforms.forEach((platform) => {
      const platformData = variations.map((variation) => ({
        variationId: variation.id,
        platform: platform,
        caption: variation.platforms[platform]?.caption || '',
        hashtags: variation.platforms[platform]?.hashtags || [],
        cta: variation.platforms[platform]?.cta || '',
        characterCount: variation.platforms[platform]?.characterCount || 0,
        media: variation.media,
      }));

      archive.append(JSON.stringify(platformData, null, 2), {
        name: `platforms/${platform}.json`,
      });
    });

    await archive.finalize();
  } catch (error) {
    console.error('Error in exportPosts controller:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while exporting posts',
    });
  }
};

// Get platform guidelines
const getPlatformGuidelines = async (req, res) => {
  try {
    const guidelines = aiService.getPlatformGuidelines();
    res.json({
      success: true,
      data: guidelines,
    });
  } catch (error) {
    console.error('Error in getPlatformGuidelines controller:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while fetching guidelines',
    });
  }
};

module.exports = {
  generatePosts,
  regenerateVariation,
  editCaption,
  exportPosts,
  getPlatformGuidelines,
};
