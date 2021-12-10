const Sequelize = require('sequelize');
const db = require('../config/database');

const Specialization = db.define('specializations',{
    SpecializationID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SpecializationName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DegreeRequired : {
        type : Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Specialization;