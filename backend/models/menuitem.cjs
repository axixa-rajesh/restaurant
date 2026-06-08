"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menuItem.init(
    {
      menu_item_id: DataTypes.STRING,
      category_id: DataTypes.STRING,
      item_name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      is_veg: DataTypes.BOOLEAN,
      is_available: DataTypes.BOOLEAN,
      status: DataTypes.ENUM("active", "inactive"),
    },
    {
      sequelize,
      modelName: "MenuItem",
      tableName: "menuitems",
    },
  );
  return menuItem;
};
