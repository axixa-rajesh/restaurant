'use strict';

const { SequelizeScopeError } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      phone:{
        type:Sequelize.STRING(20),
        allowNull:false,
        unique:true
      },
      password_hash:{
        type:Sequelize.STRING,
        allowNull:false
      },
      role_id:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:"roles",
          key:"id"
        }
      },
      status:{
        type:Sequelize.ENUM('active','inactive'),
        defaultValue:"active"
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
    await queryInterface.dropTable('Users');
  }
};