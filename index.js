var express = require('express');
var qrTerminal = require('qrcode-terminal');
var chalk = require('chalk');
var fs = require('fs');
var localIpV4Address = require('local-ipv4-address');

var misc = require("./lib/misc.js");
var constants = require("./lib/constants.js");

var app = express();

const port = 3000 || process.env.PORT;
const pathInitial = __dirname + "/";
var pathTotal = pathInitial + process.argv[2];

var ipv4 = "http://192.168.1.2:3000";

localIpV4Address().then(function(ipAddress){
    ipv4 = ipAddress;
});


if(process.argv.length != 3) {
  console.log(chalk.red(":/ Something's missing in the arguments"));
  console.log(chalk.green("It should be something like node index.js i_am_so_great.pdf"));
  process.exit(0);
}

if(!fs.existsSync(pathTotal)) {
  console.log(chalk.red("The file does not exist, Please check the file path again"));
}
else {

  app.listen(port, (req,res) => {
  //console.log("Server is live");
  misc.header();
  qrTerminal.generate(ipv4);

});

app.get('/', (req,res) => {
  console.log(`A download was observed from ${req.ip}`);
  res.sendFile(pathInitial + process.argv[2]);
  });
}
