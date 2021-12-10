const express = require('express');
const router = express.Router();
const labReportController = require('../controller/labReport.controller');


router.get('/', labReportController.findLabReports);
router.get('/:LabReportID', labReportController.findLabReportById);
router.get('/bydate/:CheckIn',labReportController.findLabReportByDate)
router.post('/', labReportController.addLabReport);
router.put('/:LabReportID', labReportController.updateLabReport);
router.delete('/:LabReportID', labReportController.deleteById);
router.get('/bypatientid/:PatientID',labReportController.findLabReportByPatientId)



module.exports = router;
