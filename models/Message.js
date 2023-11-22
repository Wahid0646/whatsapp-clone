const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Message = sequelize.define('Message', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    message : {
        type : Sequelize.STRING,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Message;