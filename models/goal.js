// models/goal.js

//const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

module.exports = (DataTypes, sequelize) => {
  const Goal = sequelize.define('goal', {
  goal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  goal_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  goal_content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  goal_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  is_achieved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})
return Goal;
};

//module.exports = { Goal };
