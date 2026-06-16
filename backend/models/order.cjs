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
    }
  }
  Order.init({
    order_number: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    table_id: DataTypes.STRING,
    order_type:DataTypes.ENUM,
    order_status:DataTypes.ENUM,
    payment_status:DataTypes.ENUM,
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