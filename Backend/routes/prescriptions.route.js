const express = require('express');
const router = express.Router();
const prescriptionsController = require('../controller/prescription.controller');

router.post('/', prescriptionsController.addPrescriptions);
router.get('/', prescriptionsController.findPrescriptionss);
router.get('/:PrescriptionsID', prescriptionsController.findPrescriptionsById);
router.put('/:PrescriptionsID', prescriptionsController.updatePrescriptions);
router.delete('/:PrescriptionsID', prescriptionsController.deleteById);

module.exports = router;
