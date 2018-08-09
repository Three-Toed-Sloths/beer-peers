const bcrypt = require('bcryptjs');
const db = require('../models');

module.exports = {

  checkUsername: (req, res) => {
    db.User
      .findOne({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkLogin: (req, res) => {
    db.User
      .findOne({username: req.params.username})
      .then(user => 
        bcrypt.compare(req.params.password, user.password).then(result => {
          (result ? res.json({ id: user._id, result: true }) : res.json({ id: user._id, result: false }))
        })
      )
      .catch(err => res.status(422).json(err));
  }
};