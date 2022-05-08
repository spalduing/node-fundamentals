const nombre = 'Miguel';

function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

function speak(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('--Machine: Bla bla bla bla...');
      resolve(nombre);
      //   reject('Something went wrong!');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bye ', nombre);
      resolve();
    }, 1000);
  });
}

console.log('Starting process...');
hola(nombre)
  .then(speak)
  .then(speak)
  .then(speak)
  .then(speak)
  .then(speak)
  .then(adios)
  .then((nombre) => {
    console.log('Eding process...');
  })
  .catch((error) => {
    console.log(error);
  });
