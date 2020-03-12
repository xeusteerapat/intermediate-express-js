const express = require('express');
const router = express.Router();

// create router for each cat and dog
router.get('/eat', (req, res) => {
  res.send(`<h1>I am a cat, I love to eat</h1>`);
});

router.get('/sleep', (req, res) => {
  res.send('<h1>I am sleeping, do not disturb</h1>');
});

router.get('/walk', (req, res) => {
  res.send(`<h1>Walk a dog</h1>`);
});

router.get('/play', (req, res) => {
  res.send('<h1>play with dog</h1>');
});

router.post('/play', (req, res) => {
  res.send('Cat try to post something');
});
module.exports = router;
