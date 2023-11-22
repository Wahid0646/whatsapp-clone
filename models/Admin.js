const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Admin = sequelize.define('Admin', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    chatGroupId : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    userId : {
        type: Sequelize.INTEGER,
        allowNull : false
    }
}, {
    timestamps: false
});

module.exports = Admin;