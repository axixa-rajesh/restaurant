"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  Category.hasMany(models.MenuItem,{ 
    foreignKey: "category_id",
  }
  )
};

      // define association here
    }
    Category.init(
      {
        Category_id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        category_name: DataTypes.STRING,
        description: DataTypes.STRING,
        status: { 
          type: DataTypes.ENUM("active", "inactive"),
          defaultValue: "active",
          allowNull: false,
        }
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "Categories",
      },
    );
    return Category;
  };

