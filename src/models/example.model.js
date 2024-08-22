const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const Example = sequelize.define(
    'Example',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Example;
