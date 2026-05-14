"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("DiningTables", [
      {
        table_id: "DT001",
        table_number: "Table-1",
        capacity: 4,
        status: "available", // plain string
        location_note: "Near entrance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_id: "DT002",
        table_number: "Table-2",
        capacity: 2,
        status: "occupied",
        location_note: "Window side",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_id: "DT003",
        table_number: "Table-3",
        capacity: 6,
        status: "reserved",
        location_note: "Private corner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_id: "DT004",
        table_number: "Table-4",
        capacity: 4,
        status: "cleaning",
        location_note: "Center hall",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        table_id: "DT005",
        table_number: "Table-5",
        capacity: 8,
        status: "available",
        location_note: "Banquet section",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DiningTables", null, {});
  },
};
