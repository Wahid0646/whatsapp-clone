const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    jwt : {
        type: Sequelize.STRING,
    },
}, {
    timestamps: false
});

module.exports = User;