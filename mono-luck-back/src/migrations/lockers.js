'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LOCKERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lockerNo: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(2)
      },
      lockerEncoding: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(20)
      },
      unlockEncoding:{
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(50)
      },
      memberId: {
        unique : true ,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LOCKERs');
  }
};