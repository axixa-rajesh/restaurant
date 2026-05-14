const Joi = require("joi");

const customerValidationSchema = Joi.object({
  customer_name: Joi.string().min(3).max(100).required(),

  email: Joi.string().email().required(),

  phone_number: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),

  address: Joi.string().required()
});

module.exports = {
  customerValidationSchema
};'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Customer extends Model {

    static associate(models) {

      // Customer -> Orders
      Customer.hasMany(models.Order, {
        foreignKey: 'customer_id'
      });

    }

  }

  Customer.init({

    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      allowNull: false
    },

    full_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [10, 20]
      }
    },

    email: {
      type: DataTypes.STRING(120),
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }

  }, {

    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true

  });

  return Customer;

};
