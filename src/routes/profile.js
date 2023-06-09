const express = require('express');
const router = express.Router();
const profileController = require('../controller/profileController');
const { verifyUser } = require('../middleware/verifyUser');

// Read - GET Profile by id
router.get('/', verifyUser,profileController.getUserById);

// Edit - PATCH 
router.patch('/', verifyUser,profileController.updateUserProfile);

module.exports = router;
