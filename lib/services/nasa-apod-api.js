const request = require ('superagent');

function nasaAPOD(date = '2019-05-07') {
  console.log('hello');
  return request
    .get(`https://api.nasa.gov/planetary/apod?api_key=H89oIOvXb2dhR5x2xa9Lx1CsWdhVNddNPjh0JeoT&date=${date}`)
    .then(res => res.body);
}

module.exports = nasaAPOD;





