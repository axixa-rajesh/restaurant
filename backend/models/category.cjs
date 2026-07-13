'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Menuitem,{
        foreignKey:"category_id"
      })
    }
  }
  Category.init(
    {
          id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [2, 50],
        },
      },

      description: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },

      status: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
    },
  );
  return Category;
};