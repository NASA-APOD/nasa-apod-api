const apodDate = require('../services/nasa-apod-api');

module.exports = (req, res, next) => {
  apodDate(req.body.date)
    .then(apod => {
      req.apod = apod;
      next();
    });
};
