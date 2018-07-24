const db = require('../models');
const bcrypt = require('bcryptjs');
const passport= require('passport');
const LocalStrategy = require('passport-local').Strategy;

//SOmewhere in here, have route to do .populate recipes
// METHODS - usersController
module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    db.User
      .findById(req.params.id)
      .populate('recipes')
      .populate('social.followers')
      .populate('social.following')
      .populate('social.favorites')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  addRecById: (req, res) => {
    db.User
      .findById(req.params.id)
      .populate("recipes")
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  createUser: (req, res) => {
    let userData = req.body
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userData.password, salt, function(err, hash) {
        userData.password = hash;
        if (err){
          console.log(err)
        }
        else{
          console.log('encryption succesfull')
          db.User
            .create(userData)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            console.log('registration succesfull')
        }  
      });
    })
  }, 
  //checking if username are already taken
    // db.User
      // .findOne({
      //   username: {"$regex": "^" + userData.username + "\\b", "$options": "i"}}, 
      //   function (err, user) {
      //     if (user) {
      //       return alert('username is alreday taken')
      //       res.render('register', {
      //         user: user,
      //       });
      //     } else {
      //       bcrypt.genSalt(10, function(err, salt) {
      //         bcrypt.hash(userData.password, salt, function(err, hash) {
      //           userData.password = hash;
      //           if (err){
      //             console.log(err)
      //           }
      //           else{
      //             console.log('Registration succesfull')
      //           };
      //         });
      //       });
      //     } 
      //   }
      // ) 
      // .create(userData)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
      // },

  // LOG IN
  logIn: (req, res) => {
    // let query = {"username": jerrytest}
    // db.User.findOne(query).then(console.log('jerry hello'))
    let credentials = JSON.stringify(req.body)
    console.log(credentials+' '+credentials.username+' '+credentials.password+'  req.body')
    // let hotdog = credentials.username;
    // let burger = credentials.password;
    console.log('yooooooo it made it here')
    passport.use(new LocalStrategy(
      console.log('inside passport'),
      function (hotdog, burger, done) {
          getUserByUsername(hotdog, function (err, user) {
            if (err) throw err;
            if (!user) {
              return done(null, false, { message: 'Unknown User' }, console.log('Unknown User'));
            }
            console.log(`found user: ${hotdog}`);
            console.log(user);
            comparePassword(burger, user.password, function (err, isMatch) {
              if (err) throw err;
              if (isMatch) {
                  console.log(`password is a match:${burger} and ${user.password}`)
                  return done(null, user);
              } else {
                  return done(null, false, { message: 'Invalid password' }), console.log('Invalid password');
              }
            });
          });
      })
    );  
    comparePassword = function(candidatePassword, hash, callback){
      bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
          if(err) throw err;
          callback(null, isMatch);
      });
    }
    getUserByUsername = function(username, callback){
      console.log(`getting username: ${username}`)
      let query = {username: username};
      db.User.findOne(query, callback)
    }
  },

  update: (req, res) => {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
