const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// '/api/login/check/:username'
router
  .route('/check/:username/')
  .get(loginController.checkUsername);

// '/api/login/:username/:password'
router
  .route('/:username/:password')
  .get(loginController.checkLogin);

module.exports = router;