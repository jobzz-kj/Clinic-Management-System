const express = require('express');
const router = express.Router();
const masterLabTestController = require('../controller/masterLabTest.controller');

router.post('/', masterLabTestController.addMasterLabTest);
router.get('/', masterLabTestController.findMasterLabTests);
router.get('/:MasterLabTestID', masterLabTestController.findMasterLabTestById);
router.put('/:MasterLabTestID', masterLabTestController.updateMasterLabTest);
router.delete('/:MasterLabTestID', masterLabTestController.deleteById);

module.exports = router;
