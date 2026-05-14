'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Order extends Model {

    static associate(models) {

      // Order -> Customer
      Order.belongsTo(models.Customer, {
        foreignKey: 'customer_id'
      });

      // Order -> OrderItems
      Order.hasMany(models.OrderItem, {
        foreignKey: 'order_id'
      });

    }

  }

  Order.init({

    order_id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    },

    order_number: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },

    customer_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    table_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },

    order_type: {
      type: DataTypes.ENUM('dine_in', 'takeaway'),
      allowNull: false,
      validate: {
        isIn: [['dine_in', 'takeaway']]
      }
    },

    order_status: {
      type: DataTypes.ENUM(
        'pending',
        'preparing',
        'ready',
        'completed',
        'cancelled'
      ),
      allowNull: false,
      defaultValue: 'pending',
      validate: {
        isIn: [[
          'pending',
          'preparing',
          'ready',
          'completed',
          'cancelled'
        ]]
      }
    },

    payment_status: {
      type: DataTypes.ENUM(
        'unpaid',
        'partial',
        'paid'
      ),
      allowNull: false,
      defaultValue: 'unpaid',
      validate: {
        isIn: [['unpaid', 'partial', 'paid']]
      }
    },

    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    tax_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    discount_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },

    special_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    created_by: {
      type: DataTypes.STRING(36),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }

  }, {

    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true

  });

  return Order;

};