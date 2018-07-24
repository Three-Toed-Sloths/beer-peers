const db = require('../models');

// METHODS - loginController
module.exports = {

  findUsername: (req, res) => {
    db.User
      .findOne({username: req.params.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};