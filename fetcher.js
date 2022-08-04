const fs = require('fs');

const request = require('request');

const url = process.argv.slice(2)[0];
const path = process.argv.slice(3)[0];

const writeContent = function(body){
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Download and saved ${body.length} bytes to ${path}`);
  });
};

request(url, (error, response, body) => {
  writeContent(body);
  if(error) {
    console.log('error:', error);
  }
});