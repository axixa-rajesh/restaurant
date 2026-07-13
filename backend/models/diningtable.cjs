'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diningtable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      diningtable.hasMany(models.Orders, {
        foreignKey:"table_id"
      })
    }
  }
  diningtable.init(
    {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
      table_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },

      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
          max: 20,
        },
      },

      status: {
        type: DataTypes.ENUM("available", "occupied", "reserved"),
        allowNull: false,
      },

      location_note: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 100],
        },
      },
    },
    {
      sequelize,
      modelName: "diningtable",
    },
  );
  return diningtable;
};