var express = require('express');

var app = express();

const port = 3000 || process.env.PORT;

app.listen(port, (req,res) => {
  console.log("Server is live");
});

app.get('/', (req,res) => {
  console.log("A GET req to the server was recieved");
});
