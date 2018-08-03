const bcrypt = require('bcryptjs');
const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query, {password: 0})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id, {password: 0})
      .populate('recipes')
      .populate('social.followers', {password: 0})
      .populate('social.following', {password: 0})
      .populate('social.favorites')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: (req, res) => {
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: (req, res) => {
    db.User
      // .findOneAndUpdate({ _id: req.params.id }, req.body, {projection: {password: 0}, new: true, rawResult: true })
      .update({ _id: req.params.id }, req.body
      
        // (err, res) => {
        //   if (err) throw err;
        //   // console.log(JSON.stringify(res, null, 2) + " document(s) updated")}
        //   console.log(res.nModified + " document(s) updated")}
      )
      // .then(dbModel => res.json(dbModel))
      .then(result => res.json({updated: result.nModified}))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },



  create: (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        req.body.password = hash;
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    });
  }
};
