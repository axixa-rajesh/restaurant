'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class OrderItem extends Model {

    static associate(models) {

      // OrderItem -> Order
      OrderItem.belongsTo(models.Order, {
        foreignKey: 'order_id'
      });

    }

  }

  OrderItem.init({

    order_item_id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    },

    order_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    menu_item_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1
      }
    },

    unit_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    line_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    item_status: {
      type: DataTypes.ENUM(
        'pending',
        'preparing',
        'ready',
        'served',
        'packed'
      ),
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        isIn: [[
          'pending',
          'preparing',
          'ready',
          'served',
          'packed'
        ]]
      }
    },

    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    }

  }, {

    sequelize,
    modelName: 'OrderItem',
    tableName: 'order_items',
    timestamps: true

  });

  return OrderItem;

};