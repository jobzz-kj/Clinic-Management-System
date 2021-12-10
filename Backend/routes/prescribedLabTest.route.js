const express = require('express');
const router = express.Router();
const prescribedLabTestController = require('../controller/prescribedLabTest.controller');

router.post('/', prescribedLabTestController.addPrescribedLabTest);
router.get('/', prescribedLabTestController.findPrescribedLabTests);
router.get('/:PrescribedLabTestID', prescribedLabTestController.findPrescribedLabTestById);
router.put('/:PrescribedLabTestID', prescribedLabTestController.updatePrescribedLabTest);
router.delete('/:PrescribedLabTestID', prescribedLabTestController.deleteById);

module.exports = router;
