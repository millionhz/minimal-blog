const express = require('express/');

const Post = require('../models/post');

const router = express.Router();

router.post('/', (req, res) => {
  const { id } = req.body;

  Post.deletePostById(id).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
