const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const register=require('./routes/register')

const app = express();
const PORT = 3000;

// app.use(cors());
app.use(cors({
  origin: '*', // or use '*' to allow all (not recommended in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// MongoDB connection
connectDB();
// POST route to save user data
app.use('/api', register);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});