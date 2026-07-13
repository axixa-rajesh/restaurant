'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User, {
        foreignKey:"role_id"
      })
    }
  }
  Role.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    role_name: DataTypes.STRING,
    description:DataTypes.STRING,
    status: {
        type:Sequelize.ENUM('active','inactive'),
        defaultValue:"active",
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};