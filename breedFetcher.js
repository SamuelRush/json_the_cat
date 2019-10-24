const request = require("request");
//const argv = process.argv.slice(2);
const catSite = ("https://api.thecatapi.com/v1/breeds/search?q=");

const fetchBreedDescription = (breedName, callback) => {
  request((catSite + breedName), function(error, response, body) {
    const data = JSON.parse(body);
    //console.log(response.statusCode)
    if (data.length === 0) {
      callback(!null, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };