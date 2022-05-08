const nombre = 'Miguel';

async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let greetins = `Hi ${nombre}`;
      console.log(greetins);
      resolve(nombre);
    }, 1000);
  });
}

async function speak(nombre) {
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

const main = async () => {
  let name = await hola(nombre);
  await speak(name);
  await speak(name);
  await speak(name);
  await speak(name);
  await speak(name);
  await adios(name);
  console.log('Ending process');
};

console.log('Starting process');
main();
