
const Sequelize = require("sequelize");
const db = require("../config/database");
const MasterMedicine = require("./masterMedicine");
const Prescription = require("./prescription");


const PrescribedMedicine = db.define("prescribedMedicines", {
  PrescribedMedicineID : {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
    MedicinePrescriptionID: {
      type: Sequelize.INTEGER,
      allowNull : true,
      //references:{model:'prescriptions',key:'MedicinePrescriptionID'}
    },
    MasterMedicineID1: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references : {model:'masterMedicines',key:'MasterMedicineID'}
    },
    Dosage1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    MasterMedicineID2: {
      type: Sequelize.INTEGER,
      allowNull:  true,
      references : {model:'masterMedicines',key:'MasterMedicineID'}
    },
    Dosage2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    MasterMedicineID3: {
      type: Sequelize.INTEGER,
      allowNull:  true,
      references : {model:'masterMedicines',key:'MasterMedicineID'}
    },
    Dosage3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
    MasterMedicineID4: {
      type: Sequelize.INTEGER,
      allowNull:  true,
      references : {model:'masterMedicines',key:'MasterMedicineID'}
    },
    Dosage4: {
      type: Sequelize.TEXT,
      allowNull: true,
    }
  },{
    initialAutoIncrement : 1000
  });


  //Prescription.hasOne(PrescribedMedicine)
  MasterMedicine.hasMany(PrescribedMedicine)



  module.exports = PrescribedMedicine;