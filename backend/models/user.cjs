'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey:"role_id"
      })

      User.hasOne(models.Payment, {
        foreignKey:"received_by"
      })
    }
  }
  User.init({
    full_name: DataTypes.STRING,
    email:DataTypes.STRING,
    phone:DataTypes.STRING,
    password_hash:DataTypes.STRING,
    status:DataTypes.ENUM,
    role_id:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};