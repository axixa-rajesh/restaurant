'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AuditLogs', {
      
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      action: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entity_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      old_value: {
        allowNull: true,
        type: Sequelize.JSON
      },
      new_value: {
        allowNull: true,
        type: Sequelize.JSON
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
    await queryInterface.dropTable('AuditLogs');
  }
};