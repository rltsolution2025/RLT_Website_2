const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { sendAdminEmail, sendUserEmail } = require('../controller/mailer')
const { sendToSheet } = require('../service/sheetservice');


router.post('/register', async (req, res) => {
  console.log("📥 Request body:", req.body);

  const { name, email, number, district, course, specialization, join } = req.body;

  try {
    // Save user
    const user = new User({ name, email, number, district, course, specialization, join });
    await user.save();
    console.log("✅ User saved to database");

    // 1️⃣ Send admin email
   try {
      await sendAdminEmail(req.body);
      console.log("✅ Admin email sent");
    } catch (err) {
      console.error("❌ Failed to send admin email:", err);
    }

    // 2️⃣ Thank-you email to user
    try {
      await sendUserEmail(req.body);
      console.log("✅ Thank-you email sent to user");
    } catch (err) {
      console.error("❌ Failed to send user email:", err);
    }


    // 3️⃣ Send data to Google Sheet
    try { 
      await sendToSheet(req.body);
      console.log("✅ Data sent to Google Sheet (sheet.best)");
    } catch (err) {
      console.error("❌ Error sending to Google Sheet:", err.message);
    }

    // Final response to frontend
    res.status(201).json({ message: 'User registered and emails sent successfully' });
    console.log("✅ Registration complete");

  } catch (error) {
    console.error("❌ Registration or email failed:", error);
    res.status(500).json({ error: 'Something went wrong during registration' });
  }
});

module.exports = router;
