const Sequelize = require('sequelize');
const db = require('../config/database');
const Doctor = require('./doctor');
const Patient = require('./patient');



//PatientLogTable
const PatientLog = db.define('patientLogs', {
    PatientID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references:{model:'patients',key:'PatientID'}
    },
    DoctorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {model:'doctors',key:'DoctorID'}
    },
    DoctorNotes: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    PreviousMedicineHistory: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    PatientDiseaseHistory: {
        type: Sequelize.TEXT,
        allowNull: true
    }
    
},
)

Patient.hasOne(PatientLog)
Doctor.hasMany(PatientLog)


module.exports = PatientLog;






