const mongoose = require('mongoose')

const db = require('../index.js');
mongoose.Promise = global.Promise;

const roomSchema = new mongoose.Schema({
  imgId: Number,
  imgUrl: String,
  listingId: Number,
  imgOrder: Number,
  description: String
})

let Room = mongoose.model('Room', roomSchema);

module.exports = Room;