const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('compose');
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;

  Post.addPost(title, content)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.redirect('/');
      next(err);
    });
});

module.exports = router;
