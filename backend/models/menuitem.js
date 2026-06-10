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
      Menuitem.belongsTo(models.category,{
        foreignKey:"category_id",
      })

    }
  }
  Menuitem.init({
    item_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menuitem',
  });
  return Menuitem;
};