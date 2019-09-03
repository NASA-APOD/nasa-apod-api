const { Router } = require('express');
const Apod = require('../models/Apod');
const apodDate = require('../middleware/apodDate');

module.exports = Router()
  .post('/', apodDate, (req, res, next) => {
    res.send(req.apod);
    // Apod
    //   .find()
    //   .then(apod => res.send(apod))
    //   .catch(next);
  });
