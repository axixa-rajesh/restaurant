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
  diningtable.init({
    table_number: DataTypes.STRING,
    capacity:DataTypes.INTEGER,
    status:DataTypes.ENUM,
    location_note:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'diningtable',
  });
  return diningtable;
};