const express = require('express');
const router = express.Router();
const aktifreqController = require('../controller/aktifreqController');


router.get('/:id_users', aktifreqController.getViewAktifRequest);

module.exports = router;