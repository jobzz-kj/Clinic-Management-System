const labReportDao = require('../dao/labReport.dao');
var labReportController = {
    addLabReport: addLabReport,
    findLabReports: findLabReports,
    findLabReportById: findLabReportById,
    findLabReportByPatientId: findLabReportByPatientId,
    findLabReportByDate : findLabReportByDate,
    updateLabReport: updateLabReport,
    deleteById: deleteById
}

function addLabReport(req, res) {
    let labReport = req.body;
    labReportDao.create(labReport).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findLabReportById(req, res) {
    labReportDao.findById(req.params.LabReportID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findLabReportByDate(req,res){
    labReportDao.findByDate(req.params.CheckIn).
    then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function findLabReportByPatientId(req, res) {

    labReportDao
  
      .findByPatientId(req.params.PatientID)
  
      .then((data) => {
  
        res.send(data);
  
      })
  
      .catch((error) => {
  
        console.log(error);
  
      });
  
  }

function deleteById(req, res) {
    labReportDao.deleteById(req.params.LabReportID).
        then((data) => {
            res.status(200).json({
                message: "LabReport deleted successfully",
                labReport: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateLabReport(req, res) {
    labReportDao.updateLabReport(req.body, req.params.LabReportID).
        then((data) => {
            res.status(200).json({
                message: "LabReport updated successfully",
                labReport: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findLabReports(req, res) {
    labReportDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = labReportController;