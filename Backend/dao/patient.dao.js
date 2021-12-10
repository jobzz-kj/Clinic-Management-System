const Patient = require('../models/patient');
var patientDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePatient: updatePatient
}

function findAll() {
    return Patient.findAll();
}

function findById(PatientID) {
    return Patient.findByPk(PatientID);
}

function deleteById(PatientID) {
    return Patient.destroy({ where: { PatientID: PatientID } });
}

function create(patient) {
    var newPatient = new Patient(patient);
    return newPatient.save();
}

function updatePatient(patient, PatientID) {
    var updatePatient = {
        DoctorID : patient.DoctorID,
        AppointmentID : patient.AppointmentID,
        PatientName: patient.PatientName,
        ContactNo : patient.ContactNo,
        Email : patient.Email,
        DateOfBirth : patient.DateOfBirth,
        Age : patient.Age,
        Address : patient.Address,
        BloodGroup : patient.BloodGroup,
        IsPersonAlive : patient.IsPersonAlive

    };
    return Patient.update(updatePatient, { where: { PatientID: PatientID } });
}
module.exports = patientDao;