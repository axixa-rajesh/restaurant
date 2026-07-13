'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuditLog.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    user_id: DataTypes.STRING,
    action: DataTypes.STRING,
    entity_name: DataTypes.STRING,
    entity_id: DataTypes.STRING,
    old_value: DataTypes.JSON,
    new_value: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'AuditLog',
  });
  return AuditLog;
};