const bcrypt = require('bcrypt');

const password = '1234_secure!';

bcrypt.hash(password, 10, (err, hash) => {
  console.log('generated has:', hash);

  bcrypt.compare(password, hash, (err, res) => {
    console.log('Is the same password?:', res);
  });
});
