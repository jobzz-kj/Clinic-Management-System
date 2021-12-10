const Sequelize = require("sequelize");
const db = require("../config/database");

const Patient = require('./patient')
const Doctor = require('./doctor')

const Appointment = db.define("appointments", {
    AppointmentID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PatientID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references : {model:'patients',key:'PatientID'}
    },
    DoctorID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references : {model:'doctors',key:'DoctorID'}
    },
    AppointmentDate : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    AppointmentTime: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    ContactNo: {
      type: Sequelize.TEXT,
      allowNull: true,
    }
  },
  {
    initialAutoIncrement : 1000
  });

Patient.hasMany(Appointment)
Doctor.hasMany(Appointment)

  module.exports = Appointment