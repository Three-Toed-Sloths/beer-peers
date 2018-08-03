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
      // .findOne({username: req.params.username}, (err, user) => {
      //   // console.log(user)
      //   if(err){
      //     return err
      //   } else if (!user){return false}
      //   else if (req.params.password === user.password){
      //     console.log('password matched')
      //     // return true;
      //   } else {
      //     console.log('failed log in')
      //     return 'hello';
      //   }
      // })
      .findOne({username: req.params.username})
      .then(user => {
        if(req.params.password === user.password){
          console.log('password matched')
          return res.json({
            id: user._id,
            result: true})
        } else {
          console.log('incorrect password')
          return res.json({
            id: user._id,
            result: false})
        }
      })
      .catch(err => res.status(422).json(err));
  }
};