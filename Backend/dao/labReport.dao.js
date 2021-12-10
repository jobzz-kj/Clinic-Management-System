const LabReport = require('../models/labReport');
var labReportDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    findByPatientId : findByPatientId,
    findByDate : findByDate,
    deleteById: deleteById,
    updateLabReport: updateLabReport
}

function findAll() {
    return LabReport.findAll();
}

function findById(LabReportID) {
    return LabReport.findByPk(LabReportID);
}

function findByPatientId(PatientID) {
    return LabReport.findAll({where: {PatientID:PatientID}});
}

function findByDate(CheckIn){
    return LabReport.findAll({where: {CheckIn:CheckIn}});
}

function deleteById(LabReportID) {
    return LabReport.destroy({ where: { LabReportID: LabReportID } });
}

function create(labReport) {
    var newLabReport = new LabReport(labReport);
    return newLabReport.save();
}

function updateLabReport(labReport, LabReportID) {
    var updateLabReport = {
        LabReportName: labReport.LabReportName,
        PatientID : labReport.PatientID,
        DoctorID : labReport.DoctorID,
        LabTechnician : labReport.LabTechnicianID,
        CheckIn : labReport.CheckIn,
        CheckOut : labReport.CheckOut,
        Comments : labReport.Comments
    };
    return LabReport.update(updateLabReport, { where: { LabReportID: LabReportID } });
}
module.exports = labReportDao;