const express = require('express');
const router = express.Router();
const homeController = require('../controller/detailhomeController');

// CREATE - POST
router.get('/', homeController.getViewSpesific);
router.get('/:rumahsakit', homeController.getViewSpesific);

module.exports = router;