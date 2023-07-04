const Profile = require('../models/Profile');
const User = require('../models/User');
const {multipleMongooseToObject}=require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
      
    User.find({})
      .then(user => {multipleMongooseToObject(user)})
      .catch(next);

    Profile.find({})
      .then(profile => {
        res.render('home', {
          profile: multipleMongooseToObject(profile)
        });
      })
      .catch(next);

}
  
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
