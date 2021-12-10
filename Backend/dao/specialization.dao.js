const Specialization = require('../models/specialization');
var specializationDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateSpecialization: updateSpecialization
}

function findAll() {
    return Specialization.findAll();
}

function findById(SpecializationID) {
    return Specialization.findByPk(SpecializationID);
}

function deleteById(SpecializationID) {
    return Specialization.destroy({ where: { SpecializationID: SpecializationID } });
}

function create(specialization) {
    var newSpecialization = new Specialization(specialization);
    return newSpecialization.save();
}

function updateSpecialization(specialization, SpecializationID) {
    var updateSpecialization = {
        SpecializationName: specialization.SpecializationName,
        DegreeRequired : specialization.DegreeRequired
    };
    return Specialization.update(updateSpecialization, { where: { SpecializationID: SpecializationID } });
}
module.exports = specializationDao;