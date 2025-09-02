const jwt = require('jsonwebtoken');
const { getDB } = require('../utils/database');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        error: 'Access denied',
        details: 'No token provided'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Verify user still exists and is active
    const db = getDB();
    const user = await db.collection('users').findOne({ 
      userId: decoded.userId,
      isActive: true 
    });

    if (!user) {
      return res.status(401).json({
        error: 'Access denied',
        details: 'User not found or inactive'
      });
    }

    // Add user info to request
    req.user = {
      userId: decoded.userId,
      email: decoded.email
    };

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        error: 'Access denied',
        details: 'Invalid token'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Access denied',
        details: 'Token expired'
      });
    }

    console.error('Auth middleware error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: 'Authentication failed'
    });
  }
};

module.exports = {
  authenticateToken
};
