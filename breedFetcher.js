const request = require('request');
let breed = process.argv[2];
const domain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(domain, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log(data[0].description);
    } else console.log(`${breed} not found. Try again!`);
  } else console.log("Error:", error);
});