import { exit } from 'process';
import { Sequelize } from 'sequelize';

const TABLE_PREFIX = ''

const connection = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: '',
  password: '',
  port: 3306,
  database: '',
  hooks: {
    beforeDefine: function (columns, model) {
      model.tableName = TABLE_PREFIX + model.name?.plural;
    },
  },
});

connection
  .authenticate()
  .then((value) => {
    console.log(`数据库连接成功`);
  })
  .catch((err: any) => {
    console.error('数据库连接异常', err.message || err);
    exit();
  });

// @ts-ignore
export default connection;
