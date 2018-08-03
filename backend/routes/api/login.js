const router = require('express').Router();
const loginController = require('../../controllers/loginController');

// '/api/login/:username'
router
  .route('/:username/')
  .get(loginController.findUsername);

// '/api/login/:username/:password'
router
  .route('/:username/:password')
  .get(loginController.checkLogin);

module.exports = router;