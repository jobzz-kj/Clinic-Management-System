const masterMedicineDao = require('../dao/masterMedicine.dao');
var masterMedicineController = {
    addMasterMedicine: addMasterMedicine,
    findMasterMedicines: findMasterMedicines,
    findMasterMedicineById: findMasterMedicineById,
    updateMasterMedicine: updateMasterMedicine,
    deleteById: deleteById
}

function addMasterMedicine(req, res) {
    let masterMedicine = req.body;
    masterMedicineDao.create(masterMedicine).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMasterMedicineById(req, res) {
    masterMedicineDao.findById(req.params.MasterMedicineID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    masterMedicineDao.deleteById(req.params.MasterMedicineID).
        then((data) => {
            res.status(200).json({
                message: "MasterMedicine deleted successfully",
                masterMedicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMasterMedicine(req, res) {
    masterMedicineDao.updateMasterMedicine(req.body, req.params.MasterMedicineID).
        then((data) => {
            res.status(200).json({
                message: "MasterMedicine updated successfully",
                masterMedicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMasterMedicines(req, res) {
    masterMedicineDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = masterMedicineController;