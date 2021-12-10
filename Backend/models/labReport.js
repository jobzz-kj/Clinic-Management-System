const Sequelize = require('sequelize');
const db = require('../config/database');

const Patient = require('./patient')
const Doctor = require('./doctor')
const MasterLabTest = require('./masterLabTest')
const Staff = require('./staff')

const LabReport = db.define('labreports',{
    LabReportID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LabTestID:{
        type : Sequelize.INTEGER,
        allowNull:false,
        references : {model : 'masterLabTests' , key : 'MasterLabTestID'}
    },
    PatientID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model:'patients',key:'PatientID'}
    },
    DoctorID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model:'doctors',key:'DoctorID'}
    },
    LabTechnicianID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model:'staffs',key:'StaffID'}
    },
    PatientValue:{
        type : Sequelize.INTEGER,
        allowNull: false
    },
    CheckIn: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    CheckOut: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    
    
    Comments: {
        type: Sequelize.TEXT,
        allowNull: true
    }
},
{
    initialAutoIncrement : 1000
  })
Patient.hasMany(LabReport)
Doctor.hasMany(LabReport)
MasterLabTest.hasMany(LabReport)
Staff.hasMany(LabReport)



module.exports = LabReport;
