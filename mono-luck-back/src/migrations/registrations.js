'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('REGISTRATIONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberId: {
        allowNull: false,
        unique : true ,
        type: Sequelize.INTEGER
      },
      priority: {
        allowNull: false,
        type: Sequelize.STRING(10)
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
    await queryInterface.dropTable('REGISTRATIONs');
  }
};