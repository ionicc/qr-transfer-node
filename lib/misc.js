var fig = require('figlet');
var chalk = require('chalk');

module.exports.header = function () {
  console.log(chalk.green("--------------------------------------------------"));
  console.log(chalk.green("File to be sent: " +process.argv[2]));
  console.log(chalk.green("--------------------------------------------------"));
}

module.exports.emoji = fig('SCAN IT  :)', (err, data) => {
  if(err) {
    console.log('Oops, something went wrong D:');
    return;
  }
  else {
    console.log(chalk.green(data));
  }
});


//Misc is turning out to be the place for all the party code :D
