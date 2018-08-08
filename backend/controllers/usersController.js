const bcrypt = require('bcryptjs');
const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query, {password: 0})
      .populate({path: 'recipes', populate: {path: 'brewer'}})
      .populate('social.followers', {password: 0})
      .populate('social.following', {password: 0})
      .populate({path: 'social.favorites', populate: {path: 'brewer'}})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id, {password: 0})
      .populate({path: 'recipes', populate: {path: 'brewer'}})
      .populate('social.followers', {password: 0})
      .populate('social.following', {password: 0})
      .populate({path: 'social.favorites', populate: {path: 'brewer'}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // ======================== NON HASH PASSWORD OPTIONS ====================================
  // create: (req, res) => {
  //   db.User
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // =======================================================================================
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
  },
  update: (req, res) => {
    db.User
      .update({ _id: req.params.id }, req.body, {password: 0})
      .then(dbModel => res.json({updated: dbModel.nModified}))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
