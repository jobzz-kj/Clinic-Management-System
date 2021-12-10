const Sequelize = require("sequelize");

const db = require("../config/database");

const Patient = require("./patient");



//MasterLabTestTable

const OrderTest = db.define("orderTests", {

    OrderTestID: {

        type: Sequelize.INTEGER,

        primaryKey: true,

        autoIncrement: true,

    },

    PatientID: {

        type: Sequelize.INTEGER,

        allowNull: false,

        references: { model: "patients", key: "PatientID" },

        // primaryKey: true,

        // autoIncrement: true

    },

    Test1: {

        type: Sequelize.STRING,

        allowNull: true,

    },

    Test2: {

        type: Sequelize.STRING,

        allowNull: true,

    },

    Test3: {

        type: Sequelize.STRING,

        allowNull: true,

    },

});



Patient.hasMany(OrderTest);

module.exports = OrderTest;