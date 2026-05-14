"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("menuItems", [
      {
        menu_item_id: "M001",
        category_id: "C001", // Beverages
        item_name: "Masala Chai",
        description: "Traditional spiced Indian tea",
        price: 40.0,
        is_veg: true,
        is_available: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_item_id: "M002",
        category_id: "C001", // Beverages
        item_name: "Cold Coffee",
        description: "Chilled coffee with ice cream",
        price: 120.0,
        is_veg: true,
        is_available: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_item_id: "M003",
        category_id: "C002", // Main Course
        item_name: "Paneer Butter Masala",
        description: "Paneer cubes in rich tomato gravy",
        price: 250.0,
        is_veg: true,
        is_available: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_item_id: "M004",
        category_id: "C002", // Main Course
        item_name: "Chicken Biryani",
        description: "Fragrant rice with marinated chicken",
        price: 300.0,
        is_veg: false,
        is_available: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_item_id: "M005",
        category_id: "C003", // Desserts
        item_name: "Gulab Jamun",
        description: "Sweet fried dumplings in syrup",
        price: 80.0,
        is_veg: true,
        is_available: true,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("menuItems", null, {});
  },
};
