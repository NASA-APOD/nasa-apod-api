const mongoose = require('mongoose');

const apodSchema = new mongoose.Schema({
  date: String,
  explanation: String,
  title: String,
  url: String
});

const Apod = mongoose.model('Apod', apodSchema);

module.exports = Apod;
