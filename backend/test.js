const { GoogleGenAI } = require('@google/genai');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { uploadFile } = require('../backend/src/services/uploadFile');

(async () => {
  const prompt = `A close up of two people staring at a cryptic drawing on a wall, torchlight flickering.
A man murmurs, 'This must be it. That's the secret code.' The woman looks at him and whispering excitedly, 'What did you find?`;

  const variations = 1;
  const apiKey = 'AIzaSyBWwwfwe6Bz4webgwc-4fJ4OPy4T4KAxgM';
  console.log({ apiKey });
  const ai = new GoogleGenAI({
    apiKey,
  });

  try {
    // Call the Google GenAI Imagen model
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: variations,
      },
    });

    const variationImages = [];

    for (const generatedImage of response.generatedImages) {
      let imgBytes = generatedImage.image.imageBytes;
      const buffer = Buffer.from(imgBytes, 'base64');
      const imageId = uuidv4();
      const filename = `image_${imageId}.png`;
      fs.writeFileSync(filename, buffer);
      // Upload to Google Drive instead of saving locally
      const link = await uploadFile(filename, filename, 'image');
      console.log('link => : ', link);
      // Delete the file from the local location after upload
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename);
      }

      variationImages.push({
        filename,
        url: link, // Google Drive link
        isPlaceholder: false,
      });
    }

    console.log('variationImages => : ', variationImages);
  } catch (imageError) {
    console.log('imageError => : ', imageError);
  }
})();
