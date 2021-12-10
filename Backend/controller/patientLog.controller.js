const patientLogDao = require('../dao/patientLog.dao');
var patientLogController = {
    addPatientLog: addPatientLog,
    findPatientLogs: findPatientLogs,
    findPatientLogById: findPatientLogById,
    updatePatientLog: updatePatientLog,
    deleteById: deleteById
}

function addPatientLog(req, res) {
    let patientLog = req.body;
    patientLogDao.create(patientLog).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientLogById(req, res) {
    patientLogDao.findById(req.params.PatientID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    patientLogDao.deleteById(req.params.PatientID).
        then((data) => {
            res.status(200).json({
                message: "PatientLog deleted successfully",
                patientLog: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePatientLog(req, res) {
    patientLogDao.updatePatientLog(req.body, req.params.PatientID).
        then((data) => {
            res.status(200).json({
                message: "PatientLog updated successfully",
                patientLog: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientLogs(req, res) {
    patientLogDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = patientLogController;