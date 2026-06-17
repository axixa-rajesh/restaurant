'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      order_number: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      customer_id: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:"customers",
          key:"id"
        }
      },
      table_id: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:"diningtables",
          key:"id"
        }
      },
      order_type:{
        type:Sequelize.ENUM('dine_in', "takeaway"),
        defaultValue:"dine_in",
        allowNull:false
      },
      order_status:{
        type:Sequelize.ENUM('pending','preparing','ready','completed','cancelled'),
        defaultValue:"pending",
        allowNull:false
      },
      payment_status:{
        type:Sequelize.ENUM('unpaid','partial','paid'),
        defaultValue:"unpaid",
        allowNull:false
      },
      sub_total:{
        type:Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
      },
      tax_amount:{
        type:Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
      },
      discount_amount:{
        type:Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
      },
      total_amount:{
        type:Sequelize.DECIMAL(10,2),
        defaultValue:0.00,
        allowNull:false
      },
      special_note:{
        type:Sequelize.TEXT,
        allowNull:true
      },
      created_by:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:"users",
          key:"id"
        }
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
    await queryInterface.dropTable('Orders');
  }
};

