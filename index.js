const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (!error) console.log(description);
  else console.log('Error:', error);
});

module.exports = { fetchBreedDescription };