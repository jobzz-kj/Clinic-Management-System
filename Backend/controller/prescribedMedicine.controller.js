const prescribedMedicineDao = require('../dao/prescribedMedicine.dao');
var prescribedMedicineController = {
    addPrescribedMedicine: addPrescribedMedicine,
    findPrescribedMedicines: findPrescribedMedicines,
    findPrescribedMedicineById: findPrescribedMedicineById,
    updatePrescribedMedicine: updatePrescribedMedicine,
    deleteById: deleteById
}

function addPrescribedMedicine(req, res) {
    let prescribedMedicine = req.body;
    prescribedMedicineDao.create(prescribedMedicine).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescribedMedicineById(req, res) {
    prescribedMedicineDao.findById(req.params.PrescribedMedicineID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescribedMedicineDao.deleteById(req.params.PrescribedMedicineID).
        then((data) => {
            res.status(200).json({
                message: "PrescribedMedicine deleted successfully",
                prescribedMedicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePrescribedMedicine(req, res) {
    prescribedMedicineDao.updatePrescribedMedicine(req.body, req.params.PrescribedMedicineID).
        then((data) => {
            res.status(200).json({
                message: "PrescribedMedicine updated successfully",
                prescribedMedicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescribedMedicines(req, res) {
    prescribedMedicineDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = prescribedMedicineController;