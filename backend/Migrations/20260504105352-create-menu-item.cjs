"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("menuItems", {
      menu_item_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Categories",
          key: "category_id",
        },
      },
      item_name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      is_veg: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      is_available: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
      },
      status: {
        allowNull: false,
        defaultValue: "active",
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("menuItems");
  },
};
