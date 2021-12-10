const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctor.controller');

router.post('/', doctorController.addDoctor);
router.get('/', doctorController.findDoctors);
router.get('/:DoctorID', doctorController.findDoctorById);
router.put('/:DoctorID', doctorController.updateDoctor);
router.delete('/:DoctorID', doctorController.deleteById);

module.exports = router;
