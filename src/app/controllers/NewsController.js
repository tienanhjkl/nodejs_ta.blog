const Profile = require('../models/Profile');
const {multipleMongooseToObject}=require('../../util/mongoose');

class NewsController {

  // [GET] /news
  index(req, res) {
    res.render('news');
  }
  // [GET] /new/:slug
  show(req, res, next) {
    Profile.find({})
      .then(profile =>
        res.json(profile))
    
  }
}

module.exports = new NewsController();
