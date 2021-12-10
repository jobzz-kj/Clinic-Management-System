const prescribedLabTestDao = require('../dao/prescribedLabTest.dao');
var prescribedLabTestController = {
    addPrescribedLabTest: addPrescribedLabTest,
    findPrescribedLabTests: findPrescribedLabTests,
    findPrescribedLabTestById: findPrescribedLabTestById,
    updatePrescribedLabTest: updatePrescribedLabTest,
    deleteById: deleteById
}

function addPrescribedLabTest(req, res) {
    let prescribedLabTest = req.body;
    prescribedLabTestDao.create(prescribedLabTest).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescribedLabTestById(req, res) {
    prescribedLabTestDao.findById(req.params.PrescribedLabTestID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    prescribedLabTestDao.deleteById(req.params.PrescribedLabTestID).
        then((data) => {
            res.status(200).json({
                message: "PrescribedLabTest deleted successfully",
                prescribedLabTest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePrescribedLabTest(req, res) {
    prescribedLabTestDao.updatePrescribedLabTest(req.body, req.params.PrescribedLabTestID).
        then((data) => {
            res.status(200).json({
                message: "PrescribedLabTest updated successfully",
                prescribedLabTest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPrescribedLabTests(req, res) {
    prescribedLabTestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = prescribedLabTestController;