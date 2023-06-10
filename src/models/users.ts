'use strict';
import { Model, DataTypes } from 'sequelize';
import {sequelize} from '../config';

class User extends Model {
  static associate(models: Model) {
  }
}
User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    underscored: true,
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

export { User as User };
