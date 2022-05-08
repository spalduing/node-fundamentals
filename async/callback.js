console.group('Exaple: #1');
function imAsync(myCallback) {
  console.log('Hi, Im a asynchronous function');
  setTimeout(() => {
    console.log('Im being asynchronus');
    myCallback();
  }, 1000);
}

console.log('Starting process...');
imAsync(function () {
  console.log('Ending process...');
});

console.groupEnd();

console.group('Exaple: #2');

const nombre = 'Miguel';

function hola(nombre, myCallback) {
  console.log('Hi ', nombre);
  setTimeout(() => {
    myCallback(nombre);
  }, 1000);
}

function adios(nombre, anotherCallback) {
  setTimeout(() => {
    console.log('Bye ', nombre);
    anotherCallback();
  }, 1000);
}

console.log('Starting process...');
hola(nombre, function (nombre) {
  adios(nombre, function () {
    console.log('Ending process...');
  });
});
console.groupEnd();
