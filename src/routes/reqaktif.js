const express = require('express');
const router = express.Router();
const reqaktifController = require('../controller/reqaktifController');


router.get('/:id', reqaktifController.getViewAktifRequest);

module.exports = router;