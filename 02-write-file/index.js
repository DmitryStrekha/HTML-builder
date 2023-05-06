const fs = require('fs');
const path = require('path');
const process = require('node:process');
const { stdin } = process;
const path2 = path.join(__dirname, '.\\text2.txt');
const stream = fs.createWriteStream(path2, 'utf-8');
console.log('Write text \n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  else {
    stream.write(data, 'utf-8');
  }
});
process.addListener('SIGINT', () => {
  process.exit();
});
process.addListener('exit', () => {
  console.log('GoodBye \n');
});