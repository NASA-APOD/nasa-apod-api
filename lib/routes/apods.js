const { Router } = require('express');
const Apod = require('../models/Apod');
const apodDate = require('../middleware/apodDate');

module.exports = Router()
  .get('/', (req, res, next) => {
    console.log('call');
    Apod
      .find()
      .then(apod => res.send(apod))
      .catch(next);
  });
