const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.get('/:title', (req, res, next) => {
  Post.getPostByTitle(req.params.title).then((post) => {
    if (post) {
      res.render('post', { post });
    } else {
      next();
    }
  });
});

module.exports = router;
