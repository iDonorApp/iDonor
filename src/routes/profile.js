const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');

// Read - GET Profile by id
router.get('/:iduser', profileController.getUserById);

// Edit - PATCH 
router.patch('/:iduser', profileController.updateUserProfile);


module.exports = router;
