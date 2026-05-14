"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        role_id: "R001",
        role_name: "Admin",
        description: "Full system access - can do everything",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: "R002",
        role_name: "Manager",
        description: "Manage staff, inventory, reports, discounts",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: "R003",
        role_name: "Cashier",
        description: "Process payments, view orders, print bills",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: "R004",
        role_name: "Waiter",
        description: "Take orders, check table status, request bills",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: "R005",
        role_name: "Chef",
        description: "View kitchen orders, update preparation status",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: "R006",
        role_name: "Stock Clerk",
        description: "Update inventory, receive deliveries",
        status: "inactive", // showing ENUM flexibility
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
