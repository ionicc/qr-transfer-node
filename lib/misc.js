var fig = require('figlet');
var chalk = require('chalk');

module.exports.header = function () {
  console.log("--------------------------------------------------");
  console.log("File to be sent: " +process.argv[2]);
  console.log("--------------------------------------------------");
}

module.exports.emoji = figlet('（〜^∇^)〜', (err, data) => {
  if(err) {
    console.log('Oops, something went wrong D:');
    return;
  }
  else {
    console.log(data);
  }
});
