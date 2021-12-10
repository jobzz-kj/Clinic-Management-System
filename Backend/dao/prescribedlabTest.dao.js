const PrescribedLabTest = require('../models/prescribedLabTest');
var prescribedLabTestDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePrescribedLabTest: updatePrescribedLabTest
}

function findAll() {
    return PrescribedLabTest.findAll();
}

function findById(PrescribedLabTestID) {
    return PrescribedLabTest.findByPk(PrescribedLabTestID);
}

function deleteById(PrescribedLabTestID) {
    return PrescribedLabTest.destroy({ where: { PrescribedLabTestID: PrescribedLabTestID } });
}

function create(prescribedLabTest) {
    var newPrescribedLabTest = new PrescribedLabTest(prescribedLabTest);
    return newPrescribedLabTest.save();
}

function updatePrescribedLabTest(prescribedLabTest, PrescribedLabTestID) {
    var updatePrescribedLabTest = {
        MasterLabTestID1 : prescribedLabTest.MasterLabTestID1,
        MasterLabTestID2 : prescribedLabTest.MasterLabTestID2,
        MasterLabTestID3 : prescribedLabTest.MasterLabTestID3
    };
    return PrescribedLabTest.update(updatePrescribedLabTest, { where: { PrescribedLabTestID: PrescribedLabTestID } });
}
module.exports = prescribedLabTestDao;