// testMail.js
const nodemailer = require('nodemailer');
require('dotenv').config();
const register = require('./routes/register'); // Adjust path if needed

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

transporter.sendMail({
  from: `"RLT Tri Force" <${process.env.SMTP_USER}>`,
  to: process.env.ADMIN_EMAIL,
  subject: 'registration successful',
  text: 'This is a test email from testMail.js'
}, (err, info) => {
  if (err) {
    console.error("❌ Failed to send test email:", err);
  } else {
    console.log("✅ Test email sent:", info.response);
  }
});
