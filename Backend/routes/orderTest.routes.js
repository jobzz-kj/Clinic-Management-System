const express = require('express');

const router = express.Router();

const OrderTestController = require('../controller/orderTest.controller');



router.post('/', OrderTestController.addOrderTest);

router.get('/', OrderTestController.findOrderTest);

router.get('/:LabReportID', OrderTestController.findOrderTestById);

router.delete('/:LabReportID', OrderTestController.deleteById);



module.exports = router;