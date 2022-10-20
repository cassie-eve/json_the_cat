const request = require('request');

const breed = process.argv[2];
const requestURL = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

request(requestURL, (error, response, body) => {
  if (error) {
    console.log(`Oh no:`, error);
  }
  if (!breed) {
    console.log(`Please include the name of the cat breed you would like to search for.`);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`Please enter the name of a real cat breed`);
  } else {
    console.log(data[0].description);
  }
});