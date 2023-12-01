const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeroute.js');
const dashboardRoute = require('./dashboardroute.js');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;