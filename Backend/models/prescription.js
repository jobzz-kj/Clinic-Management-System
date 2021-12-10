const Sequelize = require('sequelize');
const db = require('../config/database');

const Patient = require('./patient')
const Doctor = require('./doctor')



const Prescription = db.define('prescriptions',{
    PrescriptionsID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PatientID : {
        type : Sequelize.INTEGER,
        allowNull: false,
        references : {model:'patients',key:'PatientID'}
    },
    DoctorID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model:'doctors',key:'DoctorID'}
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    MedicinePrescriptionID: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    LabPrescriptionID : {
        type : Sequelize.INTEGER,
        allowNull : true
       },
    DateOfVisit : {
        type : Sequelize.DATEONLY,
        allowNull : false
    }
},
{
    initialAutoIncrement : 1000
  })

Patient.hasMany(Prescription)
Doctor.hasMany(Prescription)



module.exports = Prescription;