const express = require('express');
const router = express.Router();

var rand = function() {
  return Math.random().toString(36).substring(2);
};

var getToken = function() {
  return rand() + rand();
};

// GET all Tasks
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  res.json({email, password, token:getToken()});
});

module.exports = router;
