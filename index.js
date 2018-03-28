var express = require('express');
var qrTerminal = require('qrcode-terminal');

var misc = require("./lib/misc.js");
var constants = require("./lib/constants.js");

var app = express();

const port = 3000 || process.env.PORT;

var ipv4 = constants.IPv4;

app.listen(port, (req,res) => {
  console.log("Server is live");
  misc.header();
  qrTerminal.generate(ipv4);

});

app.get('/', (req,res) => {
  console.log("A GET req to the server was recieved");
  res.sendFile(__dirname + "/files_to_send" + "/" + process.argv[2]);
  });
