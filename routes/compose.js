const express = require('express');

const journal = require('../models/journal');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('compose');
});

router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (title && content) {
    journal.appendPost(title, content);
    res.redirect('/');
  } else {
    res.redirect('/compose');
  }
});

module.exports = router;
