const db = require('../models');

// METHODS - loginController
module.exports = {

  findUsername: (req, res) => {
    db.User
      .findOne({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  checkLogin: (req, res) => {
    db.User
      .findOne({username: req.params.username})
      .then(user => 
        (req.params.password === user.password ? 
          res.json({ id: user._id, result: true }) : res.json({ id: user._id, result: false })
        )
      )
      .catch(err => res.status(422).json(err));
  }
};