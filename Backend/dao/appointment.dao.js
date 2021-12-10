const Appointment = require('../models/appointment');
var appointmentDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    findByDoctorId: findByDoctorId,
    deleteById: deleteById,
    updateAppointment: updateAppointment
}

function findAll() {
    return Appointment.findAll();
}

function findById(AppointmentID) {
    return Appointment.findByPk(AppointmentID);
}

function findByDoctorId(DoctorID) {

    return Appointment.findAll({where: {DoctorID:DoctorID}});

}

function deleteById(AppointmentID) {
    return Appointment.destroy({ where: { AppointmentID: AppointmentID } });
}

function create(appointment) {
    var newAppointment = new Appointment(appointment);
    return newAppointment.save();
}

function updateAppointment(appointment, AppointmentID) {
    var updateAppointment = {
        PatientID: appointment.PatientID,
        DoctorID : appointment.DoctorID,
        AppointmentDate : appointment.AppointmentDate,
        AppointmentTime : appointment.AppointmentTime,
        ContactNo : appointment.ContactNo
    };
    return Appointment.update(updateAppointment, { where: { AppointmentID: AppointmentID } });
}
module.exports = appointmentDao;