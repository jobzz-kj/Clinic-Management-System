//Paitent Registration

const Sequelize = require("sequelize");
const db = require("../config/database");



const Patient = db.define("patients", {
  PatientID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PatientName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ContactNo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  Email : {
      type : Sequelize.STRING,
      allowNull : true
  },
  DateOfBirth : {
      type : Sequelize.DATEONLY,
      allowNull : true
  },
  Age : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  Address : {
      type : Sequelize.TEXT,
      allowNull : false
  },
  BloodGroup : {
      type : Sequelize.STRING,
      allowNull : true
  }
},
{
  initialAutoIncrement : 1000
});



module.exports = Patient;