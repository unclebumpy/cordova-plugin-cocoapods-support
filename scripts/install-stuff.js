//Install of this plugin fails unless xml2js is installed locally
var exec = require('child_process').exec

var child = exec('npm install',
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log(stdout);
});