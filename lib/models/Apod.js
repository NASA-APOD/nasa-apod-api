const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  date: String,
  count: Number
});

const Apod = mongoose.model('Apod', apodSchema);

module.exports = Apod;
