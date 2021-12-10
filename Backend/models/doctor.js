const Sequelize = require('sequelize');
const db = require('../config/database');

const Staff = require('./staff') 
const Specialization = require('./specialization')


const Doctor = db.define('doctors',{
    DoctorID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references : {model : 'staffs',key: 'StaffID'}
    },
    DoctorName: {
        type: Sequelize.STRING,
        allowNull : true
    },
    SpecizalizationID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model:'specializations' ,key: 'SpecializationID'}
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    IsDocAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Staff.hasOne(Doctor)
Specialization.hasMany(Doctor)

module.exports = Doctor;