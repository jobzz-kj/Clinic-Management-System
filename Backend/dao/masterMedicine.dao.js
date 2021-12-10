const MasterMedicine = require('../models/masterMedicine');
var masterMedicineDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMasterMedicine: updateMasterMedicine
}

function findAll() {
    return MasterMedicine.findAll();
}

function findById(MasterMedicineID) {
    return MasterMedicine.findByPk(MasterMedicineID);
}

function deleteById(MasterMedicineID) {
    return MasterMedicine.destroy({ where: { MasterMedicineID: MasterMedicineID } });
}

function create(masterMedicine) {
    var newMasterMedicine = new MasterMedicine(masterMedicine);
    return newMasterMedicine.save();
}

function updateMasterMedicine(masterMedicine, MasterMedicineID) {
    var updateMasterMedicine = {
        MedicineName: masterMedicine.MedicineName,
        Dosage : masterMedicine.Dosage,
        Features : masterMedicine.Features,
        url : masterMedicine.url
        
    };
    return MasterMedicine.update(updateMasterMedicine, { where: { MasterMedicineID: MasterMedicineID } });
}
module.exports = masterMedicineDao;