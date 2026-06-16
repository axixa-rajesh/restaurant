'use strict';

const category = require('../models/category.cjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menuitems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      category_id:{
        type:Sequelize.STRING,
        references:{
          model:category,
          key:id
        }
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      description:{
        type:Sequelize.TEXT,
        allowNull:true
      },
      price:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:false
      },
      is_veg:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
      },
      is_available:{
        type:Sequelize.BOOLEAN,
        defaultValue:true,
        allowNull:false
      },
      status:{
        type:Sequelize.ENUM('active', "inactive"),
        defaultValue:active,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Menuitems');
  }
};