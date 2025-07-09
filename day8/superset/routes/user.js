// routes/user.js
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.status(200).json({ name: 'Hemanth' });
});

module.exports = router;

