const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    Avt : {type : String, maxlength: 255},
    Name : {type : String, maxlength: 255},
  });

  module.exports = mongoose.model('User', User);