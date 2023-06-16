const express = require('express');
const { verifyUser } = require('../middleware/verifyUser');
const userController = require('../controller/usersController');
const router = express.Router();
const validation = require('../middleware/validation');

router.post('/register',validation.validateData, userController.register);

router.post('/login', userController.login);

module.exports = router;
