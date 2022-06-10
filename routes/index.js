const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res) => {
  Post.getPosts().then((posts) => {
    res.render('home', { posts });
  });
});

module.exports = router;
