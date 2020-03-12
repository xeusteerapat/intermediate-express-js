const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
// router.get('/*', (req, res) => {
//   res.status(404).send('404 User not found');
// });

let userList = [
  {
    id: 1,
    name: 'Teerapat',
    age: 33
  },
  {
    id: 2,
    name: 'Mesut',
    age: 33
  },
  {
    id: 3,
    name: 'Aubameyabg',
    age: 33
  }
];

router.get('/', (req, res) => {
  res.send(userList);
});

router.post('/newuser', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  };
  userList.push(newUser);
  return res.send(newUser);
});

router.delete('/deleteuser', (req, res) => {
  console.log(req.query.id);
  userList = userList.filter(user => user.id !== Number(req.query.id));
  return res.send(String(userList.length));
});

module.exports = router;
