const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/home', homeController.getAllRequest);
router.get('/home/:search', homeController.getSearch)

module.exports = router;