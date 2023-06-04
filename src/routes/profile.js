const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const { verifyUser } = require('../middleware/verifyUser');

router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: 'User is Authenticated' });
});

// Read - GET Profile by id
router.get('/:iduser', profileController.getUserById);

// Edit - PATCH 
router.patch('/:iduser', profileController.updateUserProfile);


module.exports = router;
