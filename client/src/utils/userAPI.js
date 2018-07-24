import axios from 'axios';
import bcrypt from 'bcryptjs';
// import passport from 'passport';
// import LocalStrategy from 'passport-local.Strategy';


export default {
  // GET ALL USERS
  getUsers: () => axios.get('/api/users'),
  // GET USER BY ID
  getUser: id => axios.get(`/api/users/${id}`),
  // DELETE USER BY ID
  deleteUser: id => axios.delete(`/api/users/${id}`),
  // POST NEW USER original
  // saveUser: userData => axios.post('/api/users', userData)

  // POST NEW USER new with bcrypt
  createUser: userData => {
    //checking if username are already taken
    //     User.findOne({
    //         userData.username: {
    //             "$regex": "^" + userData.username + "\\b", "$options": "i"
    //         }
    //     }, function (err, user) {
    //         if (user) {
    //             return alert('username is alreday taken')
    //             res.render('register', {
    //                 user: user,
    //             });
    //         }
    //         else {

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(userData.password, salt, function(err, hash) {
        userData.password = hash;
        if (err){
          console.log(err)
        }
        else{
          console.log('Registration succesfull')
        };
        return axios.post('/api/users', userData);
      });
    });
  },

  //LOG IN
  // logIn: (username, password) => {
  //   passport.use(new LocalStrategy(
  //     function (username, password, done) {
  //         getUserByUsername(username, function (err, user) {
  //             if (err) throw err;
  //             if (!user) {
  //                 return done(null, false, { message: 'Unknown User' }, console.log('Unknown User'));
  //             }
  
  //             comparePassword(password, user.password, function (err, isMatch) {
  //                 if (err) throw err;
  //                 if (isMatch) {
  //                     return done(null, user);
  //                 } else {
  //                     return done(null, false, { message: 'Invalid password' }), console.log('Invalid password');
  //                 }
  //             });
  //         });
  //     }));  
  //   comparePassword = function(candidatePassword, hash, callback){
  //     bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
  //         if(err) throw err;
  //         callback(null, isMatch);
  //     });
  //   }
  //   getUserByUsername = function(username, callback){
  //     let query = {username: username};
  //     User.findOne(query, callback);
  //   }
  // }

};
