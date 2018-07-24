const router = require('express').Router();
const loginController = require('../../controllers/loginController');

router
  .route('/:username')
  .get(loginController.findUsername);

module.exports = router;