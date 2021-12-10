const doctorDao = require('../dao/doctor.dao');
var doctorController = {
    addDoctor: addDoctor,
    findDoctors: findDoctors,
    findDoctorById: findDoctorById,
    updateDoctor: updateDoctor,
    deleteById: deleteById
}

function addDoctor(req, res) {
    let doctor = req.body;
    doctorDao.create(doctor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findDoctorById(req, res) {
    doctorDao.findById(req.params.DoctorID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    doctorDao.deleteById(req.params.DoctorID).
        then((data) => {
            res.status(200).json({
                message: "Doctor deleted successfully",
                doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateDoctor(req, res) {
    doctorDao.updateDoctor(req.body, req.params.DoctorID).
        then((data) => {
            res.status(200).json({
                message: "Doctor updated successfully",
                doctor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findDoctors(req, res) {
    doctorDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = doctorController;