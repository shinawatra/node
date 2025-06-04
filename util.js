function sayHello(a, b) {
  console.log(a);
  console.log(b);
}

const { readFile, writeFile } = require('fs');

readFile('./content/newFile.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile('./content/creating.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = res;
  });

  writeFile('./content/work.txt', 'new generation', (err, res) => {
    if (err) return;
    console.log(res);
  });
});

//sayHello(result.name1, result.name2);
