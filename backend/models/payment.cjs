'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.User, {
        foreignKey:"received_by"
      })
    }
  }
  Payment.init({
    order_id: DataTypes.STRING,
    payment_date: DataTypes.DATE,
    amount:DataTypes.DECIMAL,
    payment_method:DataTypes.ENUM,
    payment_status:DataTypes.ENUM,
    transaction_ref:DataTypes.STRING,
    received_by:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};


