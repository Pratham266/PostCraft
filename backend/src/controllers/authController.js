const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { getDB } = require('../utils/database');

// Generate JWT token
const generateToken = (userId, email) => {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );
};

// User signup
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        error: 'All fields are required',
        details: 'firstName, lastName, email, and password are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Validate password strength
    if (password.length < 8) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters long'
      });
    }

    const db = getDB();

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        error: 'User already exists',
        details: 'A user with this email address already exists'
      });
    }

    // Generate UUID for user
    const userId = uuidv4();

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user object
    const user = {
      userId,
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    };

    // Save user to database
    await db.collection('users').insertOne(user);

    // Generate token
    const token = generateToken(userId, email);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      message: 'User created successfully',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: 'Failed to create user account'
    });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    const db = getDB();

    // Find user by email
    const user = await db.collection('users').findOne({ 
      email: email.toLowerCase(),
      isActive: true 
    });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
        details: 'Email or password is incorrect'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Invalid credentials',
        details: 'Email or password is incorrect'
      });
    }

    // Generate token
    const token = generateToken(user.userId, user.email);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: 'Failed to authenticate user'
    });
  }
};

// Get current user profile
const getProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const db = getDB();
    const user = await db.collection('users').findOne({ 
      userId,
      isActive: true 
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: 'Failed to fetch user profile'
    });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const { firstName, lastName, email } = req.body;

    const db = getDB();

    // Check if email is being changed and if it's already taken
    if (email) {
      const existingUser = await db.collection('users').findOne({ 
        email: email.toLowerCase(),
        userId: { $ne: userId }
      });
      
      if (existingUser) {
        return res.status(409).json({
          error: 'Email already in use',
          details: 'Another user is already using this email address'
        });
      }
    }

    // Prepare update data
    const updateData = {
      updatedAt: new Date()
    };

    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (email) updateData.email = email.toLowerCase();

    // Update user
    const result = await db.collection('users').updateOne(
      { userId },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Get updated user
    const updatedUser = await db.collection('users').findOne({ userId });
    const { password: _, ...userWithoutPassword } = updatedUser;

    res.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: 'Failed to update user profile'
    });
  }
};

module.exports = {
  signup,
  login,
  getProfile,
  updateProfile
};
