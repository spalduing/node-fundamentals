// const process = require('process'); //Since 'process' is a global node module it's not necesesary to require it!!!
const { exec } = require('child_process');
const { stdout, stderr } = require('process');

process.on('beforeExit', () => {
  console.log('Aye! the process will endupt in a moment!');
});

process.on('exit', () => {
  console.log('Aye! the process just finished');
  setTimeout(() => {
    console.log('exit: This message never gonna be printed!');
  }, 0);
});

setTimeout(() => {
  console.log('On his Own: This message WILL gonna be printed!');
}, 0);

process.on('uncaughtRejection', () => {});

process.on('uncaughtException', (err, origin) => {
  console.log(
    `Well... it seems we forgot to catch an error at '${origin}' \n Here is the errror: '${err}'`
  );
  setTimeout(() => {
    console.log('uncaughtRejection: This message WILL gonna be printed!');
  }, 0);
});

// exec('node concepts/1-mono-thread.js', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

notExistingFunction();
