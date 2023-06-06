const express = require('express');
const router = express.Router();
const reqaktifController = require('../controller/reqaktifController');


router.get('/:id_users', reqaktifController.getViewAktifRequest);
router.delete('/:id_request', reqaktifController.deleteAkifRequest);

module.exports = router;