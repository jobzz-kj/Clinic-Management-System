const Sequelize = require('sequelize');
const db = require('../config/database');
const Appointment = require('./appointment');
const Patient = require('./patient');

const Bills = db.define('bills', {
    BillID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PatientID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {model:'patients',key:'PatientID'}
    },
    AppointmentID : {
        type : Sequelize.INTEGER,
        allowNull: false,
        references : {model : 'appointments', key: 'AppointmentID'}

    },
    BillAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }  
},
{
    initialAutoIncrement : 1000
  });

Appointment.hasOne(Bills)
Patient.hasMany(Bills)


module.exports = Bills;