const appointmentDao = require('../dao/appointment.dao');
var appointmentController = {
    addAppointment: addAppointment,
    findAppointments: findAppointments,
    findAppointmentById: findAppointmentById,
    findAppointmentByDoctorId: findAppointmentByDoctorId,
    updateAppointment: updateAppointment,
    deleteById: deleteById
}

function addAppointment(req, res) {
    let appointment = req.body;
    appointmentDao.create(appointment).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointmentById(req, res) {
    appointmentDao.findById(req.params.AppointmentID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
function findAppointmentByDoctorId(req, res) {

    appointmentDao.findByDoctorId(req.params.DoctorID).

        then((data) => {

            res.send(data);

        })

        .catch((error) => {

            console.log(error);

        });

}

function deleteById(req, res) {
    appointmentDao.deleteById(req.params.AppointmentID).
        then((data) => {
            res.status(200).json({
                message: "Appointment deleted successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAppointment(req, res) {
    appointmentDao.updateAppointment(req.body, req.params.AppointmentID).
        then((data) => {
            res.status(200).json({
                message: "Appointment updated successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointments(req, res) {
    appointmentDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = appointmentController;