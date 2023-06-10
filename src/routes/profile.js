const express = require('express');
const validation = require('../middleware/validation');
const router = express.Router();
const profileController = require('../controller/profileController');
const { verifyUser } = require('../middleware/verifyUser');

// Read - GET Profile by id
router.get('/', verifyUser,profileController.getUserById);

// Edit - PATCH 
router.patch('/', verifyUser,validation.validateData,profileController.updateUserProfile);

module.exports = router;
