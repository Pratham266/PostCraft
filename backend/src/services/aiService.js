const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadFile } = require('./uploadFile');
const { io } = require('../app');

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

      console.log('Generating text content 132');
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
      console.log(`Generated image 153`);
      const results = [];
      const numberOfImages = postType === 'carousel' ? 2 : 1;

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
            await fs.promises.writeFile(filename, buffer);
            // Upload to Google Drive instead of saving locally
            const link = await uploadFile(filename, filename, 'image');
            // Delete the file from the local location after upload
            if (fs.existsSync(filename)) {
              fs.unlinkSync(filename);
            }

            variationImages.push({
              filename,
              url: link, // Google Drive link
              isPlaceholder: false,
            });
            console.dir({ variationImages }, { depth: null });
            idx++;
          }

          results.push({
            variationId: i + 1,
            images: variationImages,
          });
        } catch (imageError) {
          console.error(`Error generating image 203`, imageError);
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
      console.log(`Generating video 224`);
      const results = [];

      for (let i = 1; i <= variations; i++) {
        try {
          // Start the video generation job
          let operation = await this.ai.models.generateVideos({
            model: 'veo-3.0-generate-preview',
            prompt: prompt,
          });

          let count = 1;
          // Poll for completion
          while (!operation.done) {
            console.log(`Processing video 237 => ${count}`);
            await new Promise((resolve) => setTimeout(resolve, 10000));
            operation = await this.ai.operations.getVideosOperation({
              operation: operation,
            });
            count++;
          }

          const videoId = uuidv4();
          const filename = `video_${videoId}.mp4`;

          console.dir({ operation }, { depth: null });
          // Download the generated video.
          await this.ai.files.download({
            file: operation.response.generatedVideos[0].video,
            downloadPath: filename,
          });
          // Add a small delay to ensure file is fully written
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const link = await uploadFile(filename, filename, 'video');
          // Delete the video file from the local location after upload
          if (fs.existsSync(filename)) {
            fs.unlinkSync(filename);
          }

          results.push({
            variationId: i,
            video: {
              filename,
              url: link,
              isPlaceholder: false,
            },
          });
        } catch (videoError) {
          console.error(`Error generating video 271`, videoError);
          results.push({
            variationId: i,
            video: null,
            error: videoError.message,
          });
        }
      }

      return results;
    } catch (error) {
      console.error('Error generating videos 282', error);
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

      // Generate text content first (fastest)
      // const textContent = await this.generateTextContent(
      //   postIdea,
      //   postType,
      //   selectedPlatforms,
      //   category,
      //   unifiedStyle,
      //   postVariation
      // );

      // return {
      //   success: true,
      //   message: 'Text content generated successfully',
      //   data: {
      //     variations: textContent.variations,
      //   },
      // };
      return {
        success: true,
        message: 'Text content generated successfully',
        data: {
          variations: [
            {
              id: 1,
              platforms: {
                facebook: {
                  caption:
                    "As we bid a heartfelt farewell to our beloved Bappa today, our hearts are filled with gratitude for his blessings and the joy he brought. May his presence continue to guide us until we welcome him again next year! 🙏 What's your favorite memory from Ganesh Chaturthi this year?",
                  hashtags: [
                    '#GaneshVisarjan',
                    '#GanpatiBappaMorya',
                    '#FarewellBappa',
                    '#GaneshChaturthi',
                    '#FestiveVibes',
                    '#CommunityLove',
                    '#Blessings',
                    '#UntilNextYear',
                    '#HinduFestival',
                    '#IndianCulture',
                  ],
                  cta: 'Share your favorite memory in the comments below!',
                  characterCount: 286,
                },
                instagram: {
                  caption:
                    "With heavy hearts and hopeful spirits, we bid adieu to our beloved Lord Ganesha. ✨ The echoes of 'Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya' fill the air, promising his return. May his blessings light up your path until then! 🙏",
                  hashtags: [
                    '#GaneshVisarjan',
                    '#GanpatiBappaMorya',
                    '#PudhchyaVarshiLavkarYa',
                    '#GaneshChaturthi',
                    '#FestiveFarewell',
                    '#Devotion',
                    '#Hinduism',
                    '#IndianTradition',
                    '#Blessings',
                    '#SpiritualJourney',
                    '#CulturalHeritage',
                    '#Bappa',
                    '#LordGanesha',
                    '#FestivalOfIndia',
                    '#GoodVibes',
                    '#UntilNextYear',
                    '#Faith',
                    '#Love',
                    '#Peace',
                  ],
                  cta: "Tap ❤️ if you'll miss Bappa!",
                  characterCount: 353,
                },
                linkedin: {
                  caption:
                    "Today marks Ganesh Visarjan, the culmination of the Ganesh Chaturthi festival, where we respectfully bid farewell to Lord Ganesha. This tradition, deeply rooted in cultural and spiritual significance, emphasizes themes of impermanence, renewal, and community solidarity. It's a powerful reminder of how cultural celebrations foster unity and collective well-being. Wishing everyone peace and prosperity.",
                  hashtags: [
                    '#GaneshVisarjan',
                    '#CulturalHeritage',
                    '#CommunityEngagement',
                    '#IndianFestivals',
                    '#Tradition',
                  ],
                  cta: 'What cultural traditions inspire you?',
                  characterCount: 395,
                },
                twitter: {
                  caption:
                    'Bidding a heartfelt farewell to our beloved Bappa on Ganesh Visarjan. 🙏 May his blessings stay with us until he returns next year! Ganpati Bappa Morya! #GaneshVisarjan #GanpatiBappaMorya #FarewellBappa',
                  hashtags: [
                    '#GaneshVisarjan',
                    '#GanpatiBappaMorya',
                    '#FarewellBappa',
                    '#GaneshChaturthi',
                    '#India',
                  ],
                  cta: 'Tweet your favorite Bappa memory!',
                  characterCount: 232,
                },
                whatsapp: {
                  caption:
                    'As we bid adieu to our beloved Bappa today, wishing you all peace, prosperity, and blessings! 🙏 May his divine presence always guide us. Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya! ✨🏡',
                  hashtags: [
                    '#GaneshVisarjan',
                    '#GanpatiBappaMorya',
                    '#Blessings',
                    '#Festival',
                  ],
                  cta: 'Share this message with your loved ones!',
                  characterCount: 202,
                },
              },
            },
          ],
        },
      };
    } catch (error) {
      console.error('Error generating posts 365 :', error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async generateMedia(requestData, io = null) {
    try {
      const { postIdea, postType } = requestData;
      const postVariation = 1;
      // Generate media based on post type (using placeholders for speed)
      let mediaContent = [];
      if (postType === 'image' || postType === 'carousel') {
        // mediaContent = await this.generateImages(
        //   postIdea,
        //   postVariation,
        //   postType
        // );
        if (postType === 'carousel') {
          mediaContent = [
            {
              variationId: 1,
              images: [
                {
                  filename: 'image_fbf1d97c-2ca6-4a58-b52a-9b9c8761b86c.png',
                  url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1757323895/AiPostCraft/image_fbf1d97c-2ca6-4a58-b52a-9b9c8761b86c.png',
                  isPlaceholder: false,
                },
                {
                  filename: 'image_0a35e139-158d-4ce6-b0fe-207b457b1902.png',
                  url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1757323902/AiPostCraft/image_0a35e139-158d-4ce6-b0fe-207b457b1902.png',
                  isPlaceholder: false,
                },
              ],
            },
          ];
        } else {
          mediaContent = [
            {
              variationId: 1,
              images: [
                {
                  filename: 'image_15416c41-1dda-4b4d-8919-cabb6b0ffc1e.png',
                  url: 'https://res.cloudinary.com/dsmk1zmjv/image/upload/v1757258383/AiPostCraft/image_15416c41-1dda-4b4d-8919-cabb6b0ffc1e.png',
                  isPlaceholder: false,
                },
              ],
            },
          ];
        }
      } else if (postType === 'video') {
        // mediaContent = await this.generateVideos(postIdea, postVariation);
        mediaContent = [
          {
            variationId: 1,
            video: {
              filename: 'video_b86f0930-bb09-43f9-bb61-ea8567ed8045.mp4',
              url: 'https://res.cloudinary.com/dsmk1zmjv/video/upload/v1757260132/AiPostCraft/video_b86f0930-bb09-43f9-bb61-ea8567ed8045.mp4',
              isPlaceholder: false,
            },
          },
        ];
      }

      io.emit('receive_media', {
        success: true,
        data: {
          msg: 'Media generated successfully',
          data: {
            mediaContent,
          },
        },
      });
      return;
    } catch (error) {
      console.error('Error generating posts 365 :', error);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

module.exports = new AIService();
