const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
require('../config/passport'); // Ensure Google OAuth strategy is configured

// Start Google OAuth login
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback after Google login
router.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  // Issue JWT
  const token = jwt.sign(
    { id: req.user._id, name: req.user.name, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  res.redirect(`http://localhost:5000/api/auth/google/success?token=${token}`);
});

// View token after redirect (for testing only)
router.get('/auth/google/success', (req, res) => {
  res.send(`JWT Token: ${req.query.token}`);
});

module.exports = router;
