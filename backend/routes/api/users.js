const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// '/api/users'
router.route('/')
  .get(usersController.findAll)
  .post(usersController.create);

// '/api/users/:id'
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  //my things.
router
  .route('/rec/:id')
  .post(usersController.addRecById);


// router
//   .route('/login/:username')
//   .get(usersController.findByUsername);

module.exports = router;