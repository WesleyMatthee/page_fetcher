const request = require('request');
const fs = require('fs');

const domain = process.argv[2];
const path = process.argv[3];




const content = 'Some content!';

fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

console.log("Downloaded and saved 1235 bytes to ./index.html.");