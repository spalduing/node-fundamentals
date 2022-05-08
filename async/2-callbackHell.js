const nombre = 'Miguel';

function hola(nombre, myCallback) {
  console.log('Hi ', nombre);
  setTimeout(() => {
    myCallback(nombre);
  }, 1000);
}

function speak(speakCallback) {
  setTimeout(() => {
    console.log('--Machine: Bla bla bla bla...');
    speakCallback();
  }, 1000);
}

function conversation(name, conversationNumber, callback) {
  if (conversationNumber === 0) {
    console.log('-Miguel: Bye Machine!');
    callback(name);
    return;
  }
  console.log('-Miguel: bla bla bla yada yada');
  speak(() => {
    conversation(name, --conversationNumber, callback);
  });
}

function adios(nombre, anotherCallback) {
  setTimeout(() => {
    console.log('--Machine: Bye ', nombre, '!');
    anotherCallback();
  }, 1000);
}

// console.log('Starting process...');
// hola(nombre, function (nombre) {
//   speak(() => {
//     console.log('yada yada yada...');
//     speak(() => {
//       console.log('yada yada yada...');
//       speak(() => {
//         console.log('yada yada yada...');
//         speak(() => {
//           console.log('yada yada yada...');
//           speak(() => {
//             adios(nombre, function () {
//               console.log('Ending process...');
//             });
//           });
//         });
//       });
//     });
//   });
// });

console.log('Starting process...');
hola(nombre, function (nombre) {
  conversation(nombre, 6, (nombre) => {
    adios(nombre, () => {
      console.log('Ending process');
    });
  });
});
