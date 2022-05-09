console.group('LOGS:');
console.log('Algo');
console.groupEnd();
console.group('INFO:');
console.info('Algo');
console.groupEnd();
console.group('ERROR:');
console.error('Algo');
console.groupEnd();
console.group('WARN:');
console.warn('Algo');
console.groupEnd();

var table = [
  {
    a: 1,
    b: ' z',
  },
  {
    a: 2,
    b: ' y',
  },
];
console.group('TABLE:');
console.table(table);
console.groupEnd();

console.group('COUNT:');
console.count('#');
console.count('#');
console.count('#');
console.countReset('#');
console.count('#');
console.groupEnd();
