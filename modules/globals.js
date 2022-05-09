console.log(global);

let i = 0;
let intervalo = setInterval(() => {
  console.log('hello');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(() => {
  console.log('hi');
});

// require(something)

console.log(process);

console.log(__dirname);
console.log(__filename);

global.myVariable = 'theValue';
console.log(myVariable);
