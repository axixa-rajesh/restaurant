'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menuitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menuitem.belongsTo(models.Category,{
        foreignKey:"category_id",
      })

      Menuitem.hasMany(models.Orderitem,{
        foreignKey:"menu_item_id"
      })

    }
  }
  Menuitem.init(
    {
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2, 100],
        },
      },

      description: {
        type: DataTypes.TEXT,
        validate: {
          len: [0, 1000],
        },
      },

      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      is_veg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      status: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Menuitem",
    },
  );
  return Menuitem;
};