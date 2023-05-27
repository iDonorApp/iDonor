const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController')

// CREATE - POST
router.post('/', userController.createUsers);

router.get('/', userController.getAllUsers);

router.patch('/:iduser', userController.updateUser);

router.delete('/:iduser', userController.deleteUser);

module.exports = router;