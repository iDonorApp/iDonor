const express = require('express');
const router = express.Router();
const orderController = require ('../controller/orderController');

//create - POST
router.post('/', orderController.userRequest);
router.get('/:id', orderController.getRequestById);``


module.exports = router;