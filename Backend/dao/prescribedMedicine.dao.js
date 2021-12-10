const PrescribedMedicine = require('../models/prescribedMedicine');
var prescribedMedicineDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescribedMedicine: updatePrescribedMedicine
}

function findAll() {
    return PrescribedMedicine.findAll();
}

function findById(PrescribedMedicineID) {
    return PrescribedMedicine.findByPk(PrescribedMedicineID);
}

function deleteById(PrescribedMedicineID) {
    return PrescribedMedicine.destroy({ where: { PrescribedMedicineID: PrescribedMedicineID } });
}

function create(prescribedMedicine) {
    var newPrescribedMedicine = new PrescribedMedicine(prescribedMedicine);
    return newPrescribedMedicine.save();
}

function updatePrescribedMedicine(prescribedMedicine, PrescribedMedicineID) {
    var updatePrescribedMedicine = {
        MasterMedicineID1 : prescribedMedicine.MasterMedicineID1,
        Dosage1 : prescribedMedicine.Dosage1,
        MasterMedicineID2 : prescribedMedicine.MasterMedicineID2,
        Dosage2 : prescribedMedicine.Dosage2,
        MasterMedicineID3 : prescribedMedicine.MasterMedicineID3,
        Dosage3 : prescribedMedicine.Dosage3,
        MasterMedicineID4 : prescribedMedicine.MasterMedicineID4,
        Dosage4 : prescribedMedicine.Dosage4,
    };
    return PrescribedMedicine.update(updatePrescribedMedicine, { where: { PrescribedMedicineID: PrescribedMedicineID } });
}
module.exports = prescribedMedicineDao;