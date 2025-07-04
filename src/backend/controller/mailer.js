const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEnquiryEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS  // your App Password
    }
  });

  const mailOptions = {
    from: `"RLT Academy" <${process.env.EMAIL_USER}>`,
    to: 'social.rltdigital@gmail.com', // Your email to receive enquiries
    subject: 'New Enquiry Submitted',
    html: `
      <h3>New Enquiry Received</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.number}</p>
      <p><strong>District:</strong> ${formData.district}</p>
      <p><strong>Course:</strong> ${formData.course}</p>
      <p><strong>Specialization:</strong> ${formData.specialization}</p>
      <p><strong>Immediate Joining:</strong> ${formData.join ? 'Yes' : 'No'}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEnquiryEmail;

