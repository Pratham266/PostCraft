const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
} = require('../controllers/userController');

// GET /api/users - Get all users (for admin purposes)
router.get('/', getUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', getUserById);

module.exports = router;
