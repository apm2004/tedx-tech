const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const authorizeRoles = require('../middleware/authorize');
const User = require('../models/User');

// Admin-only dashboard route
router.get('/admin/dashboard', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Hello Admin ${req.user.name}, you have access.` });
});

// Admin-only route to list users of a specific role
router.get('/admin/users/:role', verifyToken, authorizeRoles('admin'), async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ role });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

module.exports = router;
