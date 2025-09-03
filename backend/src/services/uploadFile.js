const { v2: cloudinary } = require('cloudinary');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadFile(file, filename = '', type = 'auto') {
  try {
    let uploadSource;

    if (Buffer.isBuffer(file)) {
      // Convert Buffer → base64 Data URI (image/video)
      const base64Str = file.toString('base64');
      uploadSource =
        type === 'video'
          ? `data:video/mp4;base64,${base64Str}`
          : `data:image/png;base64,${base64Str}`;
    } else {
      // file is already a local path (string)
      uploadSource = path.resolve(file);
    }

    const result = await cloudinary.uploader.upload(uploadSource, {
      folder: 'AiPostCraft',
      public_id: filename ? filename.replace(/\.[^/.]+$/, '') : undefined,
      resource_type: type, // "video" when uploading video files
    });

    console.log('✅ File uploaded successfully!');
    console.log('🌐 Public URL:', result.secure_url);

    return result.secure_url;
  } catch (err) {
    console.error('❌ Error uploading to Cloudinary:', err);
    throw err;
  }
}

module.exports = { uploadFile };
