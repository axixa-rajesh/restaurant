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
    }
  }
  Order.init({
    order_number: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    table_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};