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
        allowNull: false,
        unique: true
      },

      customer_id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        references: {
          model: 'customers', // FIXED
          key: 'customer_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      table_id: {
        type: Sequelize.STRING(36),
        allowNull: true,
      },

      order_type: {
        type: Sequelize.ENUM('dine_in', 'takeaway'),
        allowNull: false,
      },

      order_status: {
        type: Sequelize.ENUM(
          'pending',
          'preparing',
          'ready',
          'completed',
          'cancelled'
        ),
        allowNull: false,
        defaultValue: 'pending'
      },

      payment_status: {
        type: Sequelize.ENUM('unpaid', 'partial', 'paid'),
        allowNull: false,
        defaultValue: 'unpaid'
      },

      subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },

      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },

      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },

      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },

      special_note: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      created_by: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};