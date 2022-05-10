function asyncrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      //   let a = 3 + 0;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asyncrona((err, a) => {
  if (err) {
    console.log('Oh no!', err);
    // throw err; // Throw pattern does not work well with async functions
    return;
  } else {
    console.log('All good, the data is:', a);
  }
});
