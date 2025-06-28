// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
  try {
    const { name, email, number, district, course, immediateJoiner } = req.body;
    const user = new User({ name, email, number, district, course, immediateJoiner });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
