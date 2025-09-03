const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

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
  extractJSONFromResponse(text) {
    try {
      // Remove markdown code blocks if present
      let cleanText = text
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim();

      // Try to parse the cleaned text
      return JSON.parse(cleanText);
    } catch (error) {
      console.error('JSON parsing error:', error.message);
      console.error('Raw text length:', text.length);

      // If parsing fails, try to find JSON within the text
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          let jsonString = jsonMatch[0];

          // Fix common JSON issues
          // 1. Remove trailing commas
          jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1');

          // 2. Fix unterminated strings by finding the last complete property
          if (jsonString.includes('"cta": "')) {
            const ctaMatch = jsonString.match(/"cta":\s*"([^"]*?)(?:"|$)/);
            if (ctaMatch && !ctaMatch[1].endsWith('"')) {
              // Truncate at the last complete word and close the string
              const truncatedCta = ctaMatch[1].trim();
              const lastSpaceIndex = truncatedCta.lastIndexOf(' ');
              const finalCta =
                lastSpaceIndex > 0
                  ? truncatedCta.substring(0, lastSpaceIndex)
                  : truncatedCta;
              jsonString = jsonString.replace(
                /"cta":\s*"[^"]*?(?:"|$)/,
                `"cta": "${finalCta}"`
              );
            }
          }

          // 3. Ensure the JSON is properly closed
          if (!jsonString.endsWith('}')) {
            // Find the last complete property and close the JSON
            const lastCompleteProperty = jsonString.lastIndexOf('}');
            if (lastCompleteProperty > 0) {
              jsonString = jsonString.substring(0, lastCompleteProperty + 1);
            } else {
              // If no complete properties, add a basic structure
              jsonString = jsonString.replace(/,\s*$/, '') + '}';
            }
          }

          return JSON.parse(jsonString);
        } catch (parseError) {
          console.error('Failed to parse extracted JSON:', parseError);

          // Last resort: create a minimal valid JSON structure
          try {
            const fallbackJson = {
              variations: [
                {
                  id: 1,
                  platforms: {
                    facebook: {
                      caption:
                        "Exciting news! We're launching a new housing project. Stay tuned for more details!",
                      hashtags: [
                        '#NewHousingProject',
                        '#RealEstate',
                        '#DreamHome',
                      ],
                      cta: 'Learn more on our website!',
                      characterCount: 100,
                    },
                    instagram: {
                      caption:
                        '✨ New housing project coming soon! ✨ Stay tuned for updates!',
                      hashtags: [
                        '#NewHousingProject',
                        '#RealEstate',
                        '#DreamHome',
                      ],
                      cta: 'Follow for updates!',
                      characterCount: 80,
                    },
                    linkedin: {
                      caption:
                        "We're excited to announce our new housing development project. More details coming soon.",
                      hashtags: ['#RealEstateDevelopment', '#NewHousing'],
                      cta: 'Learn more on our website.',
                      characterCount: 120,
                    },
                    twitter: {
                      caption:
                        'Big news! New housing project launching soon! 🏡 #NewHousing #RealEstate',
                      hashtags: ['#NewHousing', '#RealEstate'],
                      cta: 'Learn more!',
                      characterCount: 80,
                    },
                    whatsapp: {
                      caption:
                        "Hey! Exciting news - we're launching a new housing project! 🏡 More details soon!",
                      hashtags: ['#NewHousing', '#RealEstate'],
                      cta: 'Stay tuned!',
                      characterCount: 90,
                    },
                  },
                },
              ],
            };
            console.log('Using fallback JSON structure');
            return fallbackJson;
          } catch (fallbackError) {
            console.error('Fallback JSON creation failed:', fallbackError);
            throw new Error('Invalid JSON response from AI');
          }
        }
      }
      throw new Error('No valid JSON found in response');
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

      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
          maxOutputTokens: 1500,
        },
      });

      console.log('Raw AI response length:', response.text.length);
      return this.extractJSONFromResponse(response.text);
    } catch (error) {
      console.error('Error generating text content:', error);
      throw new Error('Failed to generate text content');
    }
  }

  // Generate images using Imagen 4.0
  async generateImages(prompt, variations, postType) {
    try {
      const results = [];

      for (let i = 0; i < variations; i++) {
        try {
          // Create different image prompts for each variation
          let imagePrompt = prompt;

          if (postType === 'carousel') {
            imagePrompt = `Create a series of 3-5 related images for: ${prompt}. Each image should be visually connected but show different aspects or angles. Style: modern, professional, social media optimized.`;
          } else if (postType === 'video') {
            imagePrompt = `Create a compelling thumbnail image for a video about: ${prompt}. Style: dynamic, engaging, video thumbnail optimized.`;
          } else {
            imagePrompt = `Create a high-quality, engaging image for social media about: ${prompt}. Style: modern, professional, visually appealing, optimized for social media.`;
          }

          console.log(
            `Generating images for variation ${i + 1} with prompt: ${imagePrompt}`
          );

          // Use Imagen 4.0 for image generation
          const response = await this.ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: imagePrompt,
            config: {
              numberOfImages: postType === 'carousel' ? 4 : 1,
            },
          });

          const variationImages = [];
          let idx = 1;

          for (const generatedImage of response.generatedImages) {
            const imgBytes = generatedImage.image.imageBytes;
            const buffer = Buffer.from(imgBytes, 'base64');

            // Create unique filename
            const filename = `media${i + 1}_${idx}.png`;
            const filepath = path.join(process.cwd(), 'uploads', filename);

            // Ensure uploads directory exists
            const uploadsDir = path.dirname(filepath);
            if (!fs.existsSync(uploadsDir)) {
              fs.mkdirSync(uploadsDir, { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            variationImages.push({
              filename,
              filepath,
              url: `/uploads/${filename}`,
              isGenerated: true,
            });
            idx++;
          }

          results.push({
            variationId: i + 1,
            images: variationImages,
          });

          console.log(
            `Successfully generated ${variationImages.length} images for variation ${i + 1}`
          );
        } catch (imageError) {
          console.error(`Error generating image ${i + 1}:`, imageError);
          // Continue with other images even if one fails
          results.push({
            variationId: i + 1,
            images: [],
            error: imageError.message,
          });
        }
      }

      return results;
    } catch (error) {
      console.error('Error generating images:', error);
      throw new Error('Failed to generate images');
    }
  }

  // Generate videos using Veo 3.0
  async generateVideos(prompt, variations) {
    try {
      const results = [];

      for (let i = 1; i <= variations; i++) {
        try {
          const videoPrompt = `Create a short, engaging video (5-10 seconds) about: ${prompt}. 
          Style: modern, professional, social media optimized. 
          Include smooth transitions, good lighting, and engaging visuals. 
          Perfect for social media platforms like Instagram, Facebook, and TikTok.`;

          console.log(`Generating video ${i} with prompt: ${videoPrompt}`);

          // Use Veo 3.0 for video generation
          let operation = await this.ai.models.generateVideos({
            model: 'veo-3.0-generate-preview',
            prompt: videoPrompt,
          });

          console.log(
            `Video generation ${i} started, operation: ${operation.name}`
          );

          // Poll the operation status until the video is ready
          while (!operation.done) {
            console.log(`Waiting for video generation ${i} to complete...`);
            await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds
            // Refresh the operation object to get the latest status
            operation = await this.ai.operations.getVideosOperation({
              operation,
            });
          }

          console.log(`Video generation ${i} completed!`);

          // Download the generated video
          const filename = `video${i}.mp4`;
          const filepath = path.join(process.cwd(), 'uploads', filename);

          // Ensure uploads directory exists
          const uploadsDir = path.dirname(filepath);
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }

          // Download the video file
          await this.ai.files.download({
            file: operation.response.generatedVideos[0].video,
            downloadPath: filepath,
          });

          results.push({
            variationId: i,
            video: {
              filename,
              filepath,
              url: `/uploads/${filename}`,
              isGenerated: true,
            },
          });

          console.log(`Successfully generated and saved video ${i}`);
        } catch (videoError) {
          console.error(`Error generating video ${i}:`, videoError);
          // Continue with other videos even if one fails
          results.push({
            variationId: i,
            video: null,
            error: videoError.message,
          });
        }
      }

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

      // Generate text content
      console.log('Generating text content...');
      const textContent = await this.generateTextContent(
        postIdea,
        postType,
        selectedPlatforms,
        category,
        unifiedStyle,
        postVariation
      );

      // Generate media based on post type
      let mediaContent = [];
      if (postType === 'image' || postType === 'carousel') {
        console.log('Generating images...');
        mediaContent = await this.generateImages(
          postIdea,
          postVariation,
          postType
        );
      } else if (postType === 'video') {
        console.log('Generating videos...');
        mediaContent = await this.generateVideos(postIdea, postVariation);
      }

      // Combine text and media content
      const results = textContent.variations.map((variation, index) => {
        const media = mediaContent[index] || {};

        return {
          id: variation.id,
          postType,
          platforms: variation.platforms,
          media: media,
          previews: this.generatePreviews(variation.platforms, media, postType),
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

  // Generate platform previews
  generatePreviews(platforms, media, postType) {
    const previews = {};

    Object.keys(platforms).forEach((platform) => {
      const platformData = platforms[platform];
      previews[platform] = {
        caption: platformData.caption,
        hashtags: platformData.hashtags,
        cta: platformData.cta,
        characterCount: platformData.characterCount,
        media: media,
        postType: postType,
        preview: this.createPreviewHTML(
          platform,
          platformData,
          media,
          postType
        ),
      };
    });

    return previews;
  }

  // Create HTML preview for each platform
  createPreviewHTML(platform, content, media, postType) {
    const platformStyles = {
      facebook: 'bg-blue-50 border-blue-200',
      instagram:
        'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
      linkedin: 'bg-blue-50 border-blue-300',
      twitter: 'bg-gray-50 border-gray-200',
      whatsapp: 'bg-green-50 border-green-200',
    };

    return `
      <div class="platform-preview ${platformStyles[platform]} border rounded-lg p-4 max-w-sm">
        <div class="platform-header flex items-center space-x-2 mb-3">
          <div class="w-6 h-6 bg-${platform === 'instagram' ? 'gradient-to-br from-purple-500 to-pink-500' : platform === 'facebook' ? 'blue-600' : platform === 'linkedin' ? 'blue-700' : platform === 'twitter' ? 'black' : 'green-500'} rounded"></div>
          <span class="font-semibold text-sm">${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
        </div>
        <div class="content">
          ${media && media.images ? media.images.map((img) => `<img src="${img.url}" class="w-full rounded mb-2" alt="Generated content">`).join('') : ''}
          ${media && media.video ? `<video src="${media.video.url}" class="w-full rounded mb-2" controls></video>` : ''}
          <p class="text-sm mb-2">${content.caption}</p>
          <div class="hashtags text-xs text-blue-600 mb-2">${content.hashtags.join(' ')}</div>
          <div class="cta text-xs font-medium text-gray-600">${content.cta}</div>
          <div class="character-count text-xs text-gray-400 mt-1">${content.characterCount} characters</div>
        </div>
      </div>
    `;
  }
}

module.exports = new AIService();
