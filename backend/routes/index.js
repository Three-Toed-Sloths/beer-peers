const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API ROUTES
router.use('/api', apiRoutes);

// REACT ROUTE
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
