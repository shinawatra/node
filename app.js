//__dirname: path to current directory
//__filename: file name
//require - function to use modules (commonJs)
//module - info about current module (file)
//process - info about env where the programme is being executed

// const africaCountry = 'Nigeria';
// const europeanCountry = 'Belgium';

// const sayName = require('./name');

//sayName(africaCountry, europeanCountry);

// const { items, single } = require('./alte');

const http = require('http');

const server = http.createServer((req, res) => {
  //   res.write('First node file and practice');
  //   res.end();
  if (req.url === '/') {
    res.end('Welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('This is the about page');
  } else {
    res.end(
      '<p>Oops we cannot find the page you are looking for</p>, </br> <a href="/">Go back home</a>'
    );
  }
});

server.listen(3000);
