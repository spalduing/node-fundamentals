const fs = require('fs');

function read(path, callback) {
  fs.readFile(path, (err, data) => {
    callback(data.toString());
  });
}

function write(path, content, callback) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Succes! Thi is what you wrote: ');
      callback();
    }
  });
}

function unwrite(path, callback) {
  fs.unlink(path, callback);
}

// read(`${__dirname}/archive.txt`, (stringData) => {
//   console.log(stringData);
// });

read(`${__dirname}/archive.txt`, console.log);

write(`${__dirname}/archive1.txt`, 'Alojaaa!', () => {
  read(`${__dirname}/archive1.txt`, console.log);
});

// unwrite(`${__dirname}/archive1.txt`, console.log);
