'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MEMBERS extends Model {
    static associate(models) {
      // define association here
      MEMBERS.hasOne(models.REGISTRATIONS),
      MEMBERS.hasOne(models.LOCKERS)
    }
  }
  MEMBERS.init({
    name: DataTypes.STRING,
    cardId: DataTypes.STRING,
    phone: DataTypes.STRING,
    membership: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MEMBERS',
  });
  return MEMBERS;
};