const patientDao = require('../dao/patient.dao');
var patientController = {
    addPatient: addPatient,
    findPatients: findPatients,
    findPatientById: findPatientById,
    updatePatient: updatePatient,
    deleteById: deleteById
}

function addPatient(req, res) {
    let patient = req.body;
    patientDao.create(patient).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientById(req, res) {
    patientDao.findById(req.params.PatientID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    patientDao.deleteById(req.params.PatientID).
        then((data) => {
            res.status(200).json({
                message: "Patient deleted successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePatient(req, res) {
    patientDao.updatePatient(req.body, req.params.PatientID).
        then((data) => {
            res.status(200).json({
                message: "Patient updated successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatients(req, res) {
    patientDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = patientController;