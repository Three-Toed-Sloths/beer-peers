const router = require('express').Router();
const recipesController = require('../../controllers/recipesController');

// '/api/recipe'
router.route('/')
  .get(recipesController.findAll)
  .post(recipesController.create);

// '/api/recipe/:id'
router
  .route('/:id')
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);

module.exports = router;