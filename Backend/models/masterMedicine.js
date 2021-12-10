
const Sequelize = require('sequelize');
const db = require('../config/database');

const MasterMedicine = db.define('masterMedicines',{
    MasterMedicineID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MedicineName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Dosage : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Features : {
        type: Sequelize.TEXT,
        allowNull: false
    },
    //To store medicine pic
    url : {
        type : Sequelize.TEXT,
        allowNull: true
    }
})


module.exports = MasterMedicine;