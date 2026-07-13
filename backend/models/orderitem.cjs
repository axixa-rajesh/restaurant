'use strict';
const {
  Model,
  DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Orderitem.belongsTo(models.Order,{
        foreignKey:"order_id",
      })

    Orderitem.belongsTo(models.Menuitem,{
        foreignKey:"menu_item_id"
      })

    Orderitem.belongsTo(models.User,{
        foreignKey:"received_by"
      })
    }

  }
  Orderitem.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    order_id: DataTypes.STRING,
    menu_item_id: DataTypes.STRING,
    payment_date:DataTypes.DATE,
    amount:DataTypes.DECIMAL(10,2),
    payment_method:{
      type:DataTypes.ENUM('cash','card','upi'),
      defaultValue:"cash"
    },
    payment_status:{
      type:DataTypes.ENUM("pending", "paid", "failed"),
      defaultValue:"pending"
    },
    transaction_ref:DataTypes.STRING,
    received_by:DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Orderitem',
  });
  return Orderitem;
};