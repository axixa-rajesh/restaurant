'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        id: 'CUST001',
        full_name: 'Rahul Gupta',
        phone: '9876543210',
        email: 'rahul@example.com',
        address: '123 MG Road, Delhi',
        createdAT: new Date(),
        updatedAt: new Date(),
      },
    //   {
    //     id: 'CUST002',
    //     full_name: 'Sneha Kapoor',
    //     phone: '9123456780',
    //     email: null, // allowed to be null
    //     address: '45 Residency Area, Jaipur',
    //     createdAT: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 'CUST003',
    //     full_name: 'Amit Verma',
    //     phone: '9988776655',
    //     email: 'amit@example.com',
    //     address: null, // allowed to be null
    //     createdAT: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     id: 'CUST004',
    //     full_name: 'Priya Singh',
    //     phone: '9012345678',
    //     email: 'priya@example.com',
    //     address: 'Sector 21, Gurgaon',
    //     createdAT: new Date(),
    //     updatedAt: new Date(),
    //   },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {});
  }
};
