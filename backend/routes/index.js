const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/users',authenticateUser, require('./user'));
router.use('/posts',authenticateUser, require('./post'));

module.exports = router;