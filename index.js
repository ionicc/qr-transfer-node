var express = require('express');

var app = express();

var qrTerminal = require('qrcode-terminal');

const port = 3000 || process.env.PORT;

app.listen(port, (req,res) => {
  console.log("Server is live");
  qrTerminal.generate("http://192.168.1.2:3000");
});

app.get('/', (req,res) => {
  console.log("A GET req to the server was recieved");
  res.sendFile(__dirname + "/files_to_send" + "/bitcoin.pdf");
});
