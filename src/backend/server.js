// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const register=require('./routes/register')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();
// POST route to save user data
app.use('/api', register);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
