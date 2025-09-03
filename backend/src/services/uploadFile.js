const { v2: cloudinary } = require('cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dsmk1zmjv',
  api_key: '388754587969739',
  api_secret: 'W59KNQSH8e8kyVcJosSKi5shemo',
});

async function uploadFile(file, filename = '') {
  try {
    let uploadSource;

    if (Buffer.isBuffer(file)) {
      // Convert Buffer → base64 Data URI
      const base64Str = file.toString('base64');
      uploadSource = `data:image/png;base64,${base64Str}`;
    } else {
      // If it's a file path or remote URL, upload directly
      uploadSource = file;
    }

    const result = await cloudinary.uploader.upload(uploadSource, {
      folder: 'AiPostCraft',
      public_id: filename ? filename.replace(/\.[^/.]+$/, '') : undefined, // remove file extension if present
      resource_type: 'auto',
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
