const express = require('express');
const validationWa = require('../middleware/validationWa')
const router = express.Router();
const orderController = require ('../controller/orderController');

//create - POST
router.post('/',validationWa.validateWaNumber,orderController.userRequest);
router.get('/:id', orderController.getRequestById);``


module.exports = router;