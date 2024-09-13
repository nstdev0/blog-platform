const express = require('express');
const router = express.Router();

// Modelo de Blog
const Blog = require('../models/Blog');

// Obtener todos los blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un blog por ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un blog existente
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
