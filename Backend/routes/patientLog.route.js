const express = require('express');
const router = express.Router();
const patientLogController = require('../controller/patientLog.controller');

router.post('/', patientLogController.addPatientLog);
router.get('/', patientLogController.findPatientLogs);
router.get('/:PatientID', patientLogController.findPatientLogById);
router.put('/:PatientID', patientLogController.updatePatientLog);
router.delete('/:PatientID', patientLogController.deleteById);

module.exports = router;
