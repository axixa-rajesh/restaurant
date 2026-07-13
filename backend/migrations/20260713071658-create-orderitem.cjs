'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orderitems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      order_id:{
        type:Sequelize.STRING,
        allowNull:false,
        references:{
          model:"orders",
          key:"id"
        }
      },
      menu_item_id:{
        type:Sequelize.STRING,
        allowNull: false,
        references:{
          model:"menuitems",
          key:"id"
        }
      },
      payment_date:{
        type:Sequelize.DATE,
        allowNull: false
      },
      amount:{
        type:Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      payment_method:{
        type:Sequelize.ENUM('cash','card','upi'),
        defaultValue:"cash",
        allowNull: false
      },
      payment_status:{
        type:Sequelize.ENUM('success','failed','refunded'),
        defaultValue:"success",
        allowNull: false
      },
      transaction_ref:{
        type:Sequelize.STRING,
      },
      received_by:{
        type:Sequelize.STRING,
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
    await queryInterface.dropTable('Orderitems');
  }
};