const router = require('express').Router();
const userRoutes = require('./users');
const recipeRoutes = require('./recipes');
const loginRoutes = require('./login')

// ROUTES
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes)
router.use('/login', loginRoutes)

module.exports = router;
