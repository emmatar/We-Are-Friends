const router = require('express').Router();
const thoughtsRoute = require('./thoughtsRoute');
const usersRoute = require('./userRoutes');

router.use('/thoughts', thoughtsRoute);
router.use('/users', usersRoute);

module.exports = router;