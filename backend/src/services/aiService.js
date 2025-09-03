const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadFile } = require('./uploadFile');

class AIService {
  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY,
    });
  }

  // Platform-specific content guidelines
  getPlatformGuidelines() {
    return {
      facebook: {
        maxCaptionLength: 2200,
        maxHashtags: 30,
        style: 'conversational, engaging, community-focused',
        cta: 'Like, Share, Comment',
      },
      instagram: {
        maxCaptionLength: 2200,
        maxHashtags: 30,
        style: 'visual, aesthetic, hashtag-rich',
        cta: 'Double tap, Share, Save',
      },
      linkedin: {
        maxCaptionLength: 3000,
        maxHashtags: 5,
        style: 'professional, informative, industry-focused',
        cta: 'Connect, Share, Comment',
      },
      twitter: {
        maxCaptionLength: 280,
        maxHashtags: 5,
        style: 'concise, trending, conversational',
        cta: 'Retweet, Like, Reply',
      },
      whatsapp: {
        maxCaptionLength: 1000,
        maxHashtags: 10,
        style: 'personal, direct, emoji-friendly',
        cta: 'Share, Forward, Reply',
      },
    };
  }

  // Extract JSON from markdown code blocks with better error handling
  extractJSONFromResponse(response) {
    try {
      // get first candidate’s text
      const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || '';

      if (!text) {
        throw new Error('No text found in response.');
      }

      // remove markdown code fences if present
      const cleaned = text.replace(/```json|```/g, '').trim();

      // parse JSON
      const json = JSON.parse(cleaned);

      return json;
    } catch (error) {
      console.error('Failed to extract JSON from response:', error);
      return null;
    }
  }

  // Generate text content for posts
  async generateTextContent(
    prompt,
    postType,
    platforms,
    category,
    unifiedStyle,
    variations
  ) {
    try {
      const guidelines = this.getPlatformGuidelines();
      const platformList = platforms.join(', ');

      const systemInstruction = `You are an expert social media content creator. Generate ${variations} creative variations of social media posts based on the user's prompt.

Requirements:
- Post Type: ${postType}
- Platforms: ${platformList}
- Category: ${category}
- Unified Style: ${unifiedStyle ? 'Yes - maintain consistent tone across platforms' : 'No - adapt to each platform'}
- Generate ${variations} unique variations

For each variation, create platform-specific content that follows these guidelines:
${Object.entries(guidelines)
  .map(
    ([platform, rules]) =>
      `- ${platform.toUpperCase()}: Max ${rules.maxCaptionLength} chars, max ${rules.maxHashtags} hashtags, ${rules.style} style`
  )
  .join('\n')}

Each variation should include:
1. A compelling caption adapted for each platform
2. Relevant hashtags (platform-appropriate quantity)
3. Platform-specific call-to-action
4. Content that's brand-safe and engaging

IMPORTANT: Return ONLY valid JSON without any markdown formatting, code blocks, or additional text. The response must be parseable JSON. Keep responses concise to avoid truncation. Use short captions and CTAs.

Return the response as a JSON object with this structure:
{
  "variations": [
    {
      "id": 1,
      "platforms": {
        "facebook": {
          "caption": "...",
          "hashtags": ["#tag1", "#tag2"],
          "cta": "...",
          "characterCount": 150
        },
        "instagram": { ... },
        "linkedin": { ... },
        "twitter": { ... },
        "whatsapp": { ... }
      }
    }
  ]
}`;

      console.log('Generating text content...');
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
        },
      });

      console.dir({ chekccontent: response }, { depth: null });
      return this.extractJSONFromResponse(response);
    } catch (error) {
      console.error('Error generating text content:', error);
      throw new Error('Failed to generate text content');
    }
  }

  // Generate images using Google GenAI Imagen model
  async generateImages(prompt, variations, postType) {
    try {
      console.log(`Generating ${variations} image variations using Imagen...`);
      const results = [];
      const numberOfImages = postType === 'carousel' ? 4 : 1;

      // Ensure uploads directory exists
      const uploadsDir = path.join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      for (let i = 0; i < variations; i++) {
        try {
          // Call the Google GenAI Imagen model
          const response = await this.ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: numberOfImages,
            },
          });

          const variationImages = [];
          let idx = 1;
          for (const generatedImage of response.generatedImages) {
            let imgBytes = generatedImage.image.imageBytes;
            const buffer = Buffer.from(imgBytes, 'base64');
            const imageId = uuidv4();
            const filename = `image_${imageId}.png`;

            // Upload to Google Drive instead of saving locally
            const link = await uploadFile(buffer, filename);

            variationImages.push({
              filename,
              url: link, // Google Drive link
              isPlaceholder: false,
            });

            idx++;
          }

          results.push({
            variationId: i + 1,
            images: variationImages,
          });

          console.log(`Generated images for variation ${i + 1}`);
        } catch (imageError) {
          console.error(`Error generating image ${i + 1}:`, imageError);
          results.push({
            variationId: i + 1,
            images: [],
            error: imageError.message,
          });
        }
      }

      console.log('Image generation completed');
      return results;
    } catch (error) {
      console.error('Error generating images:', error);
      throw new Error('Failed to generate images');
    }
  }

  // Generate videos using placeholder system (faster for testing)
  async generateVideos(prompt, variations) {
    try {
      console.log(
        `Generating ${variations} video variations using Gemini AI...`
      );
      const results = [];

      for (let i = 1; i <= variations; i++) {
        try {
          // Start the video generation job
          let operation = await ai.models.generateVideos({
            model: 'veo-3.0-generate-preview',
            prompt: prompt,
          });

          // Poll for completion
          while (!operation.done) {
            await new Promise((resolve) => setTimeout(resolve, 10000)); // 10 seconds
            operation = await ai.operations.getVideosOperation({ operation });
          }

          // Once done, get the video bytes
          const videoResponse = operation.response;
          if (
            !videoResponse ||
            !videoResponse.generatedVideos ||
            !videoResponse.generatedVideos[0]
          ) {
            throw new Error('No video generated by Gemini AI');
          }

          const videoBytes = videoResponse.generatedVideos[0].video.videoBytes;
          const buffer = Buffer.from(videoBytes, 'base64');

          // Save the video to the uploads directory
          const filename = `video${i}.mp4`;
          const uploadsDir = path.join(process.cwd(), 'uploads');
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }
          const filepath = path.join(uploadsDir, filename);
          fs.writeFileSync(filepath, buffer);

          results.push({
            variationId: i,
            video: {
              filename,
              filepath,
              url: `/uploads/${filename}`,
              isPlaceholder: false,
            },
          });

          console.log(`Generated video for variation ${i}`);
        } catch (videoError) {
          console.error(`Error generating video ${i}:`, videoError);
          results.push({
            variationId: i,
            video: null,
            error: videoError.message,
          });
        }
      }

      console.log('Video generation completed');
      return results;
    } catch (error) {
      console.error('Error generating videos:', error);
      throw new Error('Failed to generate videos');
    }
  }

  // Generate complete posts with all content
  async generatePosts(requestData) {
    try {
      const {
        postIdea,
        postType,
        selectedPlatforms,
        category,
        unifiedStyle,
        postVariation,
      } = requestData;

      console.log('Starting post generation with:', {
        postIdea,
        postType,
        selectedPlatforms,
        category,
        unifiedStyle,
        postVariation,
      });

      // Generate text content first (fastest)
      console.log('Step 1/3: Generating text content...');
      const textContent = await this.generateTextContent(
        postIdea,
        postType,
        selectedPlatforms,
        category,
        unifiedStyle,
        postVariation
      );

      // Generate media based on post type (using placeholders for speed)
      let mediaContent = [];
      if (postType === 'image' || postType === 'carousel') {
        console.log('Step 2/3: Generating images...');
        mediaContent = await this.generateImages(
          postIdea,
          postVariation,
          postType
        );
      } else if (postType === 'video') {
        console.log('Step 2/3: Generating videos...');
        mediaContent = await this.generateVideos(postIdea, postVariation);
      }

      // Combine text and media content
      console.log('Step 3/3: Combining content...');
      console.dir({ result: textContent.variations }, { depth: null });
      const results = textContent.variations.map((variation, index) => {
        const media = mediaContent[index] || {};

        // Add media object to each platform
        const platformsData = Object.fromEntries(
          Object.entries(variation.platforms).map(([platform, data]) => [
            platform,
            { ...data, media },
          ])
        );
        return {
          id: variation.id,
          postType,
          platforms: platformsData,
        };
      });

      console.log('Post generation completed successfully!');
      return {
        success: true,
        data: {
          variations: results,
          metadata: {
            generatedAt: new Date().toISOString(),
            postType,
            platforms: selectedPlatforms,
            category,
            unifiedStyle,
            totalVariations: postVariation,
          },
        },
      };
    } catch (error) {
      console.error('Error generating posts:', error);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

module.exports = new AIService();
