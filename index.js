var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here

// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */
console.log('Hello World');

/** 2) A first working Express Server */
// app.get('/', (req, res)=> {
//   res.send("Hello Express");
// });

/** 3) Serve an HTML file */
app.get('/', (req, res) => {
  var absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

app.listen(5000);
