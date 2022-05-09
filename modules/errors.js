function anotherFucntion() {
  itBrokes();
}
function itBrokes() {
  return 3 + z;
}

function itBrokesAsync(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error within the async function');
      callback(error);
    }
  }, 1000);
}
try {
  //   anotherFucntion();
  //   itBrokes();
  itBrokesAsync(console.log); //passin console.log as a fucntion callback
} catch (error) {
  console.error('Something went wrong...', error);
}
