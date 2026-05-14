"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        category_id: "C001",
        category_name: "Beverages",
        description: "Drinks and refreshments",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: "C002",
        category_name: "Main Course",
        description: "Meals and entrees",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: "C003",
        category_name: "Desserts",
        description: "Sweet dishes and ice creams",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: "C004",
        category_name: "Starters",
        description: "Appetizers and small plates",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
