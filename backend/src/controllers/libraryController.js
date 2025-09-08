const { v4: uuidv4 } = require('uuid');
const { getDB } = require('../utils/database');

const saveAllPostToLibrary = async (req, res) => {
  const { data, postType } = req.body;
  const userId = req.user.userId;
  const db = getDB();
  try {
    if (data) {
      const posts = Object.keys(data).map((platform) => ({
        postId: uuidv4(),
        ...data[platform],
        platform,
        postType,
        userId,
        createdOn: new Date(),
        updatedOn: new Date(),
      }));

      await db.collection('library').insertMany(posts);
      return res.status(200).json({ message: 'Posts saved to library', data });
    }
    return res.status(200).json({ message: 'No posts to save' });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error saving posts to library', error: err.message });
  }
};

const getAllPostsFromLibrary = async (req, res) => {
  const userId = req.user.userId;
  const db = getDB();
  try {
    const posts = await db.collection('library').find({ userId }).toArray();
    return res
      .status(200)
      .json({ message: 'Posts fetched successfully', data: posts });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Error saving posts to library', error: err.message });
  }
};

module.exports = { saveAllPostToLibrary, getAllPostsFromLibrary };
