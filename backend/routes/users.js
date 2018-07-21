var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// After Register render?
router.get('/register', function (req, res) {
    res.render('register');
    console.log('res.render(register) ran');
});

// After Login render?
router.get('/login', function (req, res) {
    res.render('login');
    console.log('res.render(login) ran');
});

// Register User
// router.post('/register', function (req, res) {
//     //checking if username are already taken
//     User.findOne({
//         username: {
//             "$regex": "^" + newUser.username + "\\b", "$options": "i"
//         }
//     }, function (err, user) {
//         if (user) {
//             res.render('register', {
//                 user: user,
//             });
//         }
//         else {
//             User.createUser(newUser, function (err, user) {
//                 if (err) throw err;
//                 console.log(user);
//             });
//             req.flash('success_msg', 'You are registered and can now login');
//             console.log('success_msg', 'You are registered and can now login')
//             res.redirect('/users/login');
//         }
//     });
// });


// Login user
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' }, console.log('Unknown User'));
            }

            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' }), console.log('Invalid password');
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function (req, res) {
        res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');
    console.log('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;