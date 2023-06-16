const express = require('express');
const router = express.Router();
const detailhomeController = require('../controller/detailhomeController');

// CREATE - POST
router.get('/', detailhomeController.getview);
router.get('/:rumahsakit', detailhomeController.getViewSpesific);

module.exports = router;