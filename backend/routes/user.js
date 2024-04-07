const router = require('express').Router();
const { userController } = require('../controllers');

router.put('/',  userController.modifiedUser)

module.exports = router;