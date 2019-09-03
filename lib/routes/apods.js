const { Router } = require('express');
const Apod = require('../models/Apod');
const apodDate = require('../middleware/apodDate');

module.exports = Router()
  .get('/', apodDate, (req, res, next) => {
    console.log('call', apodDate);
    console.log('more stuff', req.apod);
    Apod
      .find()
      .then(apod => res.send(apod))
      .catch(next);
  });
