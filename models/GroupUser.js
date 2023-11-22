const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const GroupUser = sequelize.define('GroupUser', {
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

module.exports = GroupUser;