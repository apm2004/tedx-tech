const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

// Protected dashboard route (for any authenticated user)
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, you are authorized!` });
});

module.exports = router;
