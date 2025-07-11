// utils/sheetService.js
const axios = require('axios');
require('dotenv').config(); // ensures SHEET_BEST_URL is loaded

async function sendToSheet(userData) {
  try {
    const response = await axios.post(process.env.SHEET_BEST_URL, userData);
    console.log("✅ Data sent to Google Sheet (sheet.best)");
    return response.data;
  } catch (err) {
    console.error("❌ Error sending to Google Sheet:", err.message);
    throw err;
  }
}

module.exports = {
  sendToSheet
};
