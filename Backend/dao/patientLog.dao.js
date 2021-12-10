const PatientLog = require('../models/patientLog');
var patientLogDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePatientLog: updatePatientLog
}

function findAll() {
    return PatientLog.findAll();
}

function findById(PatientID) {
    return PatientLog.findByPk(PatientID);
}

function deleteById(PatientID) {
    return PatientLog.destroy({ where: { PatientID: PatientID } });
}

function create(patientLog) {
    var newPatientLog = new PatientLog(patientLog);
    return newPatientLog.save();
}

function updatePatientLog(patientLog, PatientID) {
    var updatePatientLog = {
        DoctorID : patientLog.DoctorID,
        DoctorNotes : patientLog.DoctorNotes,
        PreviousMedicineHistory : patientLog.PreviousMedicineHistory,
        PatientDiseaseHistory : patientLog.PatientDiseaseHistory
    };
    return PatientLog.update(updatePatientLog, { where: { PatientID: PatientID } });
}
module.exports = patientLogDao;