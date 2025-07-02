const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://socialrltdigital:947yhRqQVrTd4VLr@rlt-tri-force.kdcchsc.mongodb.net/?retryWrites=true&w=majority&appName=RLT-TRI');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
