const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const ForgetPasswordRequest = sequelize.define('ForgetPasswordRequest', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    uuid : {
        type : Sequelize.STRING
    },
    isActive : {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

module.exports = ForgetPasswordRequest;