const request = require("request");
//const argv = process.argv.slice(2);
const catSite = ("https://api.thecatapi.com/v1/breeds/search?q=");

const fetchBreedDescription = (breedName, callback) => {
  request((catSite + breedName), function(error, response, body) {
    if (error !== null) {
      throw err
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };