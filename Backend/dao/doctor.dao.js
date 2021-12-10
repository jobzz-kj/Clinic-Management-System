const Doctor = require('../models/doctor');
var doctorDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateDoctor: updateDoctor
}

function findAll() {
    return Doctor.findAll();
}

function findById(DoctorID) {
    return Doctor.findByPk(DoctorID);
}

function deleteById(DoctorID) {
    return Doctor.destroy({ where: { DoctorID: DoctorID } });
}

function create(doctor) {
    var newDoctor = new Doctor(doctor);
    return newDoctor.save();
}

function updateDoctor(doctor, DoctorID) {
    var updateDoctor = {
        DoctorName: doctor.DoctorName,
        SpecializationID : doctor.SpecializationID,
        IsDocAvailable : doctor.IsDocAvailable
    };
    return Doctor.update(updateDoctor, { where: { DoctorID: DoctorID } });
}
module.exports = doctorDao;