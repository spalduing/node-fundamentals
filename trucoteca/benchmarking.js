console.time('global');

let suma = 0;

console.time('loop');
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd('loop');

let suma2 = 0;

console.time('loop 2');
for (let j = 0; j < 1000000; j++) {
  suma2 += 1;
}
console.timeEnd('loop 2');

console.time('async');
async().then(() => {
  console.timeEnd('async');
});

console.timeEnd('global');

function async() {
  return new Promise((resolve) => {
    console.log('Async process finished!');
    resolve();
  });
}
