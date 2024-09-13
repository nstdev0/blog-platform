const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.get('/', (req, res) => {
    res.send('Blog API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
