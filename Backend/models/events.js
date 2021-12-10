const Sequelize = require('sequelize');
const db = require('../config/database');



//EventTable
const Event = db.define('events', {
    EventID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EventName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    StartDate:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    EndDate:{
        type: Sequelize.DATEONLY,
        allowNull: false
    }

})


module.exports = Event;
