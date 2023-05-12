'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permission.belongsToMany(models.Role,{
        through : 'RolePermission',
        as: 'roles',
        foreignKey: 'perm_id',

      })
    }
  }
  Permission.init({
    permission_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    permission_description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};