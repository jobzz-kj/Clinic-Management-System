const specializationDao = require('../dao/specialization.dao');
var specializationController = {
    addSpecialization: addSpecialization,
    findSpecializations: findSpecializations,
    findSpecializationById: findSpecializationById,
    updateSpecialization: updateSpecialization,
    deleteById: deleteById
}

function addSpecialization(req, res) {
    let specialization = req.body;
    specializationDao.create(specialization).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSpecializationById(req, res) {
    specializationDao.findById(req.params.SpecializationID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    specializationDao.deleteById(req.params.SpecializationID).
        then((data) => {
            res.status(200).json({
                message: "Specialization deleted successfully",
                specialization: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateSpecialization(req, res) {
    specializationDao.updateSpecialization(req.body, req.params.SpecializationID).
        then((data) => {
            res.status(200).json({
                message: "Specialization updated successfully",
                specialization: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSpecializations(req, res) {
    specializationDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = specializationController;