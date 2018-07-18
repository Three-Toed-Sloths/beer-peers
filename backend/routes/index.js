const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const app = require('express');

// API ROUTES
router.use('/api', apiRoutes);

// REACT ROUTE
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


  // ?? Allow access once logged in to certain pages. "I think"
router.get('/', ensureAuthenticated, function(req, res){
  //?? Below replace 'index' with page user will be sent to once logged in.
  //?? res.render('index');
   res.render('index');
});

//?? enasureAuthenticated ??Middleware?? called above
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
    
    //?? flash error message and 'You are not logged in', may want to use console.log instead.
    //?? flash helps with bootstrap alerts. "I think"
    req.flash('error_msg','You are not logged in');
    
    //?? redirect to this path if not authenticated. "I think" 
		res.redirect('/users/login');
	}
}

// ?? Initialize passport
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//   failureRedirect: '/login' }),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/');
//   });

module.exports = router;
