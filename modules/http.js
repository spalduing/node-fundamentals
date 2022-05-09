const http = require('http');

const router = (req, res) => {
  console.log('New request');
  console.log(req.url);

  switch (req.url) {
    case '/hello':
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.write('Hi how are you?');
      res.end();
      break;
    case '/':
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.write('Hi Im learning to use http module in nodejs');
      res.end();
      break;
    default:
      res.write('I dont know what you want!!');
      res.end();
      break;
  }

  res.end();
};

http.createServer(router).listen(3000);

console.log('Listening http at port 3000');
