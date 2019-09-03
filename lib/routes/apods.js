const { Router } = require('express');
const Apod = require('../models/Apod');
const apodDate = require('../middleware/apodDate');

module.exports = Router()
  .post('/', apodDate, (req, res, next) => {
    // res.send(req.apod);
    const {
      date,
    } = req.body;

    Apod
      .find({ date })
      .then(response => {
        if(response.length === 0) {
          return Apod.create({ date, count: 1 });
        } else {
          return Apod.findByIdAndUpdate(response[0]._id, { count: response[0].count + 1 }, { new: true });
        }
      })
      .then(data => {
        res.send({ ...req.apod, count: data.count });
      })
      .catch(next);
  });
    

