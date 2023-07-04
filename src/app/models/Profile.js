const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
    Name : {type : String, maxlength: 255},
    Gender : {type : String, maxlength: 6},
    Age : {type : String, maxlength: 2},
    Image : {type : String, maxlength: 600},
    LinkFB : {type : String, maxlength: 600},
    LinkIG : {type : String, maxlength: 600},
  //  createAt: {type: Date, default: Date.now},
  //  updateAt: {type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Profile', Profile);