const express = require('express');
const animalRoute = require('./routes/animalRoute.js');
const userRoute = require('./routes/userRoute.js');
const numberRoute = require('./routes/numberRoute.js');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log(req.url);
  res.send(`
    <div>
      <form action="" method="POST">
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="text" placeholder="password" />
        <input name="confirmPassword" type="text" placeholder="confirm password" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.get('/teerapat', (req, res) => {
  res.send(`<h1>My name is Teerapat</h1>`);
});

app.use('/', numberRoute);

// animals routes
app.use('/cat', animalRoute);
app.use('/dog', animalRoute);

// user routes
app.use('/user', userRoute);

// query parameters
app.get('/getQuery', function(req, res) {
  console.log(req.query);
  res.send(req.query);
});

// number routes
app.use('/add', numberRoute);
app.use('/operations', numberRoute);
app.use('/math', numberRoute);
// app.post('/', (req, res) => {
//   res.send('Account created');
// });

app.put('/', (req, res) => {
  res.send('Put succeeded');
});

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
