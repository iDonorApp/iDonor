const express = require('express');
const { verifyUser } = require('../middleware/verifyUser');
const userController = require('../controller/usersController');
const router = express.Router();

router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: 'Success', nama: req.nama });
});

router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;
