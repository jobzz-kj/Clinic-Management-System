const Prescriptions = require('../models/prescription');
var prescriptionDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescriptions: updatePrescriptions
}

function findAll() {
    return Prescriptions.findAll();
}

function findById(PrescriptionsID) {
    return Prescriptions.findByPk(PrescriptionsID);
}

function deleteById(PrescriptionsID) {
    return Prescriptions.destroy({ where: { PrescriptionsID: PrescriptionsID } });
}

function create(prescriptions) {
    var newPrescriptions = new Prescriptions(prescriptions);
    return newPrescriptions.save();
}

function updatePrescriptions(prescriptions, PrescriptionsID) {
    var updatePrescriptions = {
        PatientID : prescriptions.PatientID,
        DoctorID :  prescriptions.DoctorID,
        MedicinePrescriptionID : prescriptions.MedicinePrescriptionID,
        LabPrescriptionID : prescriptions.LabPrescriptionID,
        DateOfVisit : prescriptions.DateOfVisit
    };
    return Prescriptions.update(updatePrescriptions, { where: { PrescriptionsID: PrescriptionsID } });
}
module.exports = prescriptionDao;