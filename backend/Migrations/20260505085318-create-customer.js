'use strict';
/** @type {import('sequelize-cli').Migration} */
Module.exports = {
  async up(queryInterface, Sequelize

  ) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36)
      },
      full_name: {
        type: Sequelize.STRING(120),
        allowNull:false
      },
      phone: {
        type: Sequelize.STRING(20),
        unique:false,
        allowNull: false,
      },
      email:{
        type : Sequelize.STRING(120),
        allowNull:true,
        unique:true
      },
      address:{
        type : Sequelize.STRING(255),
        allowNull:true
      },
      createdAT:{
        allowNull:false,
        type : Sequelize.DATE
        
      },
        
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};