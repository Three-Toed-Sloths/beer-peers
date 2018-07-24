import axios from 'axios';
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
  createUser: userData => axios.post('/api/users', userData),

  //LOG IN
  logIn: loginData => axios.post('/api/users/login', loginData),

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
