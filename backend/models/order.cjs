'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer,{
        foreignKey:"customer_id",
      })

      Order.belongsTo(models.Diningtable, {
        foreignKey:"table_id"
      })

      Order.belongsTo(models.User,{
        foreignKey:"created_by"
      })

      Order.hasMany(models.Orderitem,{
        foreignKey:"order_id",
      })
    }
  }
  Order.init({
        id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    order_number: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    table_id: DataTypes.STRING,
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
    sub_total:DataTypes.DECIMAL,
    tax_amount:DataTypes.DECIMAL,
    discount_amount:DataTypes.DECIMAL,
    total_amount:DataTypes.DECIMAL,
    special_note:DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};