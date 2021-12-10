const MasterLabTest = require('../models/masterLabTest');
var masterLabTestDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMasterLabTest: updateMasterLabTest
}

function findAll() {
    return MasterLabTest.findAll();
}

function findById(MasterLabTestID) {
    return MasterLabTest.findByPk(MasterLabTestID);
}

function deleteById(MasterLabTestID) {
    return MasterLabTest.destroy({ where: { MasterLabTestID: MasterLabTestID } });
}

function create(masterLabTest) {
    var newMasterLabTest = new MasterLabTest(masterLabTest);
    return newMasterLabTest.save();
}

function updateMasterLabTest(masterLabTest, MasterLabTestID) {
    var updateMasterLabTest = {
        MasterLabTestName: masterLabTest.MasterLabTestName,
        Description : masterLabTest.Description,
        NormalChange : masterLabTest.NormalChange
    };
    return MasterLabTest.update(updateMasterLabTest, { where: { MasterLabTestID: MasterLabTestID } });
}
module.exports = masterLabTestDao;