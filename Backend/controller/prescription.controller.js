const prescriptionsDao = require('../dao/prescription.dao');
var prescriptionsController = {
    addPrescriptions: addPrescriptions,
    findPrescriptionss: findPrescriptionss,
    findPrescriptionsById: findPrescriptionsById,
    updatePrescriptions: updatePrescriptions,
    deleteById: deleteById
}

function addPrescriptions(req, res) {
    let prescriptions = req.body;
    prescriptionsDao.create(prescriptions).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescriptionsById(req, res) {
    prescriptionsDao.findById(req.params.PrescriptionsID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescriptionsDao.deleteById(req.params.PrescriptionsID).
        then((data) => {
            res.status(200).json({
                message: "Prescriptions deleted successfully",
                prescriptions: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePrescriptions(req, res) {
    prescriptionsDao.updatePrescriptions(req.body, req.params.PrescriptionsID).
        then((data) => {
            res.status(200).json({
                message: "Prescriptions updated successfully",
                prescriptions: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescriptionss(req, res) {
    prescriptionsDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = prescriptionsController;