const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Group = sequelize.define('chatGroup', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
}, {
    timestamps: false
});

module.exports = Group;