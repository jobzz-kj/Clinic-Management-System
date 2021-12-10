const Sequelize = require('sequelize');
const db = require('../config/database');



//MasterLabTestTable
const MasterLabTest = db.define('masterLabTests', {
    MasterLabTestID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MasterLabTestName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    NormalRange : {
        type : Sequelize.TEXT,
        allowNull : false
    }

})


module.exports = MasterLabTest;






