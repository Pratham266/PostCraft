const { getDB } = require('../utils/database');
const { ObjectId } = require('mongodb');

// Get all users (for admin purposes)
const getUsers = async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection('users').find({}).toArray();
    
    // Remove passwords from response
    const usersWithoutPasswords = users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    
    res.json(usersWithoutPasswords);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDB();
    const user = await db.collection('users').findOne({ userId: id });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

module.exports = {
  getUsers,
  getUserById,
};
