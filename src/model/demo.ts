import connection from '@/model/index';
import { INTEGER, DATE, STRING } from 'sequelize';

const model = connection.define('demo', {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: STRING(30), allowNull: false },
  age: { type: INTEGER }
});

export default model;
