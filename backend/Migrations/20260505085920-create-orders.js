'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36)
      },
      order_number: {
        type: Sequelize.STRING(30),
        allowNull:false,
        unique: true
      },
      customer_id:{
        type: Sequelize.STRING(36),
        allowNull:false,
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
    await queryInterface.dropTable('orders');
  }
};