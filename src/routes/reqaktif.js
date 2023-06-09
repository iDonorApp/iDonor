const express = require('express');
const router = express.Router();
const reqaktifController = require('../controller/reqaktifController');
const { verifyUser } = require('../middleware/verifyUser');

router.get('/', verifyUser,reqaktifController.getViewAktifRequest);
router.delete('/:id_request', verifyUser,reqaktifController.deleteAkifRequest);

module.exports = router;