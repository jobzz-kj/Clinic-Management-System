
const Sequelize = require("sequelize");
const db = require("../config/database");
const MasterLabTest = require("./masterLabTest");
const Prescription = require("./prescription");



const PrescribedLabTest = db.define("prescribedLabTests", {
    PrescribedLabTestID : {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    LabPrescriptionID: {
      type: Sequelize.INTEGER,
     allowNull : true,
      //references : {model: 'prescriptions',key:'LabPrescriptionID'}
    },
    MasterLabTestID1: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references : {model : 'masterLabtests', key:'MasterlabTestID'}
    },
    MasterLabTestID2: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references : {model : 'masterLabtests', key:'MasterlabTestID'}
    },
    MasterLabTestID3: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references : {model : 'masterLabtests', key:'MasterlabTestID'}
    }
  },{
    initialAutoIncrement : 1000
  });


  //Prescription.hasOne(PrescribedLabTest)
  MasterLabTest.hasMany(PrescribedLabTest)

  module.exports = PrescribedLabTest;