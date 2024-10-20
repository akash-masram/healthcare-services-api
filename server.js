require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectdb');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import routes
const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
