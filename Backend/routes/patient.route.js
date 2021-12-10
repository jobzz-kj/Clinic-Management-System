const express = require('express');
const router = express.Router();
const patientController = require('../controller/patient.controller');

router.post('/', patientController.addPatient);
router.get('/', patientController.findPatients);
router.get('/:PatientID', patientController.findPatientById);
router.put('/:PatientID', patientController.updatePatient);
router.delete('/:PatientID', patientController.deleteById);

module.exports = router;
