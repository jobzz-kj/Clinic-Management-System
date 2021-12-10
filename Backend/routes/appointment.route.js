const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointment.controller');

router.post('/', appointmentController.addAppointment);
router.get('/', appointmentController.findAppointments);
router.get('/:AppointmentID', appointmentController.findAppointmentById);
router.put('/:AppointmentID', appointmentController.updateAppointment);
router.delete('/:AppointmentID', appointmentController.deleteById);
router.get('/bydoctorid/:DoctorID',appointmentController.findAppointmentByDoctorId)

module.exports = router;
