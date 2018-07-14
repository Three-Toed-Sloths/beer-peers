const router = require('express').Router();
const userRoutes = require('./users');
const userRoutes = require('./recipes');

// ROUTES
router.use('/users', userRoutes);
router.use('/recipes', bookRoutes)

module.exports = router;
