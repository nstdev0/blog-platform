const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a new post
router.post('/create', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new Post({ title, content, author });
        await newPost.save();
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
