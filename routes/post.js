const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  Post.getPostById(req.params.id)
    .then((post) => {
      if (post) {
        res.render('post', { post });
      } else {
        next();
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next();
      } else {
        next(err);
      }
    });
});

module.exports = router;
