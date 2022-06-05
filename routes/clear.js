const express = require('express');

const journal = require('../models/journal');

const router = express.Router();

router.post('/', (req, res) => {
  journal.clear();
  res.redirect('/');
});

module.exports = router;
