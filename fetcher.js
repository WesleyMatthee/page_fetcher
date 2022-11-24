//console.log(process.argv);
//node fetcher.js http://www.example.edu/ ./index.html

const request = require('request');
const fs = require('fs');

const http = process.argv[2];
const path = process.argv[3];



//const content = 'Some content!';

request(http, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }

  fs.writeFile(`${path}`, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}.`);
    // file written successfully
  });
  
});

