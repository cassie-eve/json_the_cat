const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const requestURL = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
  request(requestURL, (error, response, body) => {
    if (error) {
      return callback('Oh no:', error);
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      callback('Please enter the name of a real cat breed');
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };