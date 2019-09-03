const apodDate = require('../services/nasa-apod-api');

module.exports = (req, res, next) => {
  console.log('date stuff', req.body.date);
  apodDate(req.body.date)
    .then(apod => {
      req.apod = apod;
      next();
    });
};
