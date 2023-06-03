const express = require('express');
const validationWa = require('../middleware/validationWa')
const GetLinkAPI = require('../middleware/PlaceApi')
const router = express.Router();
const orderController = require ('../controller/orderController');


//create - POST
router.post('/',validationWa.validateWaNumber,GetLinkAPI.getLinkPlaceAPI,orderController.userRequest);
router.get('/:id', orderController.getRequestById);``


module.exports = router;