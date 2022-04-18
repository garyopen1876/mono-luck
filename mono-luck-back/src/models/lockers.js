'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LOCKERS extends Model {
    static associate(models) {
      // define association here
      LOCKERS.belongsTo(models.MEMBERS)
    }
  }
  LOCKERS.init({
    lockerNo: DataTypes.STRING,
    lockerEncoding: DataTypes.STRING,
    unlockEncoding: DataTypes.STRING,
    memberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LOCKERS',
  });
  return LOCKERS;
};