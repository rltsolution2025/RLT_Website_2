// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const sendEnquiryEmail = require('../controller/mailer'); // adjust path if needed

router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, number, district, course,specialization, join } = req.body;
    const user = new User({ name, email, number, district, course, specialization, join});
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  } 
});

module.exports = router;
