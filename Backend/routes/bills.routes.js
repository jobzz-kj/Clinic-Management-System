const express = require('express');
const router = express.Router();
const billController = require('../controller/bills.controller');

router.post('/', billController.addBill);
router.get('/', billController.findBills);
router.get('/:BillID', billController.findBillById);
router.put('/:BillID', billController.updateBill);
router.delete('/:BillID', billController.deleteById);

module.exports = router;
