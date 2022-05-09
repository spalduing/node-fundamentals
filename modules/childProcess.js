const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// exec('dir ', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });
// exec('node modules/console.js ', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn('dir');

console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log('is it dead?');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', function () {
  console.log(proceso.killed);
  console.log('Ending process...');
});
