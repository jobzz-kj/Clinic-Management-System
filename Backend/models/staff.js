const Sequelize = require('sequelize');
const db = require('../config/database');

const User = require('./user')
const Role = require('./role')


const Staff = db.define('staffs',{
    StaffID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: Sequelize.INTEGER,
        references : {model : 'users', key : 'UserID'}
    },
    StaffName : {
        type : Sequelize.STRING,
        allowNull: false
    },
    RoleID : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {model : 'roles', key : 'RoleID'}
    },
    //Sqlite doesnt have boolean function,so considering it as integer :0,1
    DateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    ContactNo : {
        type : Sequelize.TEXT,
        allowNull : false 
    },
    Email : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    Qualification :{
        type : Sequelize.TEXT,
        allowNull : true
    },
    DateOfJoining : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    DateOfResignation : {
        type : Sequelize.DATEONLY,
        allowNull: true
    },
    Remarks : {
        type  : Sequelize.TEXT,
        allowNull : true
    },
},
    {
        initialAutoIncrement : 1000
});


Role.hasMany(Staff)
User.hasOne(Staff)

module.exports = Staff;