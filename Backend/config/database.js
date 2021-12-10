const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize({
    host: process.env.DB_HOST ,
    dialect: process.env.DIALECT,
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_SCHEMA,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

if(db.dialect === 'sqlite'){
    db.storage = cms_db.sqlite;
}


if(db.dialect === 'mysql'){
    db.operatorAliases = false;
}

module.exports = db;