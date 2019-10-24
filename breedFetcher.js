const request = require("request");
const argv = process.argv.slice(2);
const catSite = ("https://api.thecatapi.com/v1/breeds/search?q=" + argv[0]);

request(catSite, function(error, response, body) {
  if (error === null) {
    console.log("Cat not found");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
