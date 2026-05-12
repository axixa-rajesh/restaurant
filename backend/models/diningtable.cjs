"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiningTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DiningTable.init(
    {
      table_id: DataTypes.STRING,
      table_number: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      status: DataTypes.STRING,
      location_note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DiningTable",
      tableName: "DiningTables",
    },
  );
  return DiningTable;
};
