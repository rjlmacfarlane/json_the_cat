const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const domain = `https://api.thecata22pi.com/v1/breeds/search?q=${breed}`;
  request(domain, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        callback(null, data[0].description);
      } else callback(`${breed} not found. Try again!`);
    } else callback(error, "Error:");
  });
};

module.exports = { fetchBreedDescription };