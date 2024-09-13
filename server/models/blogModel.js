const mongoose = require('mongoose');
const Blog = require('../models/Blog');
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Esto añade las marcas de tiempo (createdAt, updatedAt)
});

module.exports = mongoose.model('Blog', blogSchema);
