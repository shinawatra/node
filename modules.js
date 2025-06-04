const os = require('os');

const currentOs = {
  year: os.release(),
  name: os.type(),
  totalMem: os.totalmem(),
  fremen: os.freemem(),
};

//console.log(currentOs);

const { readFileSync, writeFileSync } = require('fs');

const res = readFileSync('./content/ans.txt', 'utf8');
const res1 = readFileSync('./content/creating.txt', 'utf8');

const resWrit = writeFileSync(
  './content/newFile.txt',
  'Accelerating the result',
  { flag: 'a' }
);

console.log(resWrit);
