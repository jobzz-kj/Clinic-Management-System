const masterLabTestDao = require('../dao/masterLabTest.dao');
var masterLabTestController = {
    addMasterLabTest: addMasterLabTest,
    findMasterLabTests: findMasterLabTests,
    findMasterLabTestById: findMasterLabTestById,
    updateMasterLabTest: updateMasterLabTest,
    deleteById: deleteById
}

function addMasterLabTest(req, res) {
    let masterLabTest = req.body;
    masterLabTestDao.create(masterLabTest).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMasterLabTestById(req, res) {
    masterLabTestDao.findById(req.params.MasterLabTestID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    masterLabTestDao.deleteById(req.params.MasterLabTestID).
        then((data) => {
            res.status(200).json({
                message: "MasterLabTest deleted successfully",
                masterLabTest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMasterLabTest(req, res) {
    masterLabTestDao.updateMasterLabTest(req.body, req.params.MasterLabTestID).
        then((data) => {
            res.status(200).json({
                message: "MasterLabTest updated successfully",
                masterLabTest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMasterLabTests(req, res) {
    masterLabTestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = masterLabTestController;