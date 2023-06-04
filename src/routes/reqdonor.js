const express = require('express');
const validationWa = require('../middleware/validationWa');
const GetLinkAPI = require('../middleware/PlaceApi');
const router = express.Router();
const orderController = require('../controller/reqdonorController');
const { verifyUser } = require('../middleware/verifyUser');

router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: 'User is Authenticated' });
});

//create - POST
router.post('/', validationWa.validateWaNumber, GetLinkAPI.getLinkPlaceAPI, orderController.userRequest);
router.get('/:id', orderController.getRequestById); ``




module.exports = router;