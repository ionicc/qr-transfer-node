/* QR-FILETRANSFER done in NodeJS
 *
 *  Inspired from @claudiodangelis qr-filetransfer written in Go
 *  @claudiodangelis https://github.com/claudiodangelis
 */

//Initialising dependencies
var express = require('express');
var qrTerminal = require('qrcode-terminal');
var chalk = require('chalk');
var fs = require('fs');
var localIpV4Address = require("local-ipv4-address");

//Calling local scripts

var misc = require("./lib/misc.js");
var constants = require("./lib/constants.js");

//Initialising express
var app = express();

//Defining constants for path and port
const pathInitial = __dirname + "/";
var pathTotal = pathInitial + process.argv[2];

//Using the constant values in lib/constants.js
//TODO: Constant values shouldn't be usued at all. It could break in any other device.

var ipv4 = constants.ipv4;
var fPort = constants.port;

//Getting the localIP of the device
localIpV4Address().then(function(ipAddress){
    ipv4 = ipAddress;
});

//Defining a string in the form http://ip-address:port for the qr generation
const finalIP = ipv4 + ":" + fPort;

//Checking the arguments passed
if(process.argv.length != 3) {
  console.log(chalk.red(":/ Something's missing in the arguments"));
  console.log(chalk.green("It should be something like node index.js i_am_so_great.pdf"));
  process.exit(0);
}

//Checking if the file exists
if(!fs.existsSync(pathTotal)) {
  console.log(chalk.red("The file does not exist, Please check the file path again"));
}
else {

  //Initialising the server
  app.listen(fPort, (req,res) => {
  console.log("Server is live at port" + fPort);
  misc.header();

  //Generating the qrcode
  qrTerminal.generate(finalIP);
  console.log(finalIP);

});

app.get('/', (req,res) => {
  console.log(`A download was observed from ${req.ip}`);
  res.sendFile(pathInitial + process.argv[2]);
  });
}
