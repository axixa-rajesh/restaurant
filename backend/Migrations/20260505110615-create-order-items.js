'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('order_items', {

      order_item_id: {
        type: Sequelize.STRING(36),
        primaryKey: true,
        allowNull: false
      },

      order_id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        references: {
          model: 'orders',
          key: 'order_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      menu_item_id: {
        type: Sequelize.STRING(36),
        allowNull: false
        // future me menu_items table se FK add kar sakte ho
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      unit_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      line_total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      item_status: {
        type: Sequelize.ENUM(
          'pending',
          'preparing',
          'ready',
          'served',
          'packed'
        ),
        allowNull: false,
        defaultValue: 'pending'
      },

      note: {
        type: Sequelize.STRING(255),
        allowNull: true
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
    await queryInterface.dropTable('order_items');

    // ENUM cleanup (important)
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_order_items_item_status";'
    );
  }
};