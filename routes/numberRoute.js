const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// router.get('/', (req, res) => {
//   let num = Number(req.query.a) + Number(req.query.b);
//   res.send(`<h1>The answer is ${num}`);
// });

// query strings
// router.get('/', (req, res) => {
//   let num;
//   if (req.query.mode === 'sub') {
//     num = Number(req.query.a) - Number(req.query.b);
//     console.log(req.query);
//     return res.send(`<h1>The answer is ${num}`);
//   }
// });

// parameters
router.post('/', (req, res) => {
  let a = Number(req.body.a);
  let b = Number(req.body.b);
  let ops = req.body.ops;
  let strTemplate = 'The answer is';
  switch (ops) {
    case 'add':
      return res.send(`${strTemplate} ${a + b}`);
      break;
    case 'sub':
      return res.send(`${strTemplate} ${a - b}`);
      break;
    case 'mul':
      return res.send(`${strTemplate} ${a * b}`);
      break;
    case 'div':
      return res.send(`${strTemplate} ${a / b}`);
      break;
    case 'pow':
      return res.send(`${strTemplate} ${a ** b}`);
      break;
    default:
      res.send('Incorrect parameter');
  }
  console.log(req.body);
});

module.exports = router;
