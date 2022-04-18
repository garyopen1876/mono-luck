'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class REGISTRATIONS extends Model {
    static associate(models) {
      // define association here
      REGISTRATIONS.belongsTo(models.MEMBERS)
    }
  }
  REGISTRATIONS.init({
    memberId: DataTypes.INTEGER,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'REGISTRATIONS',
  });
  return REGISTRATIONS;
};