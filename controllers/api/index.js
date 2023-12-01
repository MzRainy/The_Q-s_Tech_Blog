const router = require('express').Router();
const loginRoute = require('./loginroute');
const logoutRoute = require('./logoutroute');
const postRoute = require('./postroute');
const signupRoute = require('./signuproute');
const commentRoute = require('./commentroute')


router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/post', postRoute);
router.use('/signup', signupRoute);
router.use('/comment', commentRoute);

module.exports = router;