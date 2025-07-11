const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const register=require('./routes/register')
// const enquiry = require('./routes/enquiry'); // Import the enquiry route if needed


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

// app.use('/api/enquiry', enquiry); // Adjusted to match the route in the Angular service

app.get('/', (req, res) => {
  res.send('Welcome to RLT Academy API'); 
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});