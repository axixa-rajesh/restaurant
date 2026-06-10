'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('diningtables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      table_number: {
        type: Sequelize.STRING
      },
      capacity:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      status: {
      type: Sequelize.ENUM(
        'available',
        'occupied',
        'reserved',
        'cleaning'
    ),
      allowNull: false,
      defaultValue: 'available'
    },
      location_note:{
        type:Sequelize.STRING,
        allowNull:true
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('diningtables');
  }
};