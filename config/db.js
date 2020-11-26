const Sequelize = require('sequelize');

const config = require('./config');

let MysqlModule = {};

/* ORM 把关系型数据库的表结构映射到对象上 */

/* sequelize返回的对象是promise，可以用then()、catch() 异步处理成功和失败 */

/* koa2的处理函数都是async函数，在koa2的async函数中直接写await访问数据库即可 */

/* 选择sequelize的原因，只要API返回promise，就可以await调用 */

const sequelize = new Sequelize(config.database, config.username, config.password, {

  host: config.host,
  dialect: 'mysql', //
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }

})

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.NUMBER(11),
    primaryKey: true
  },
  username: Sequelize.STRING(20),
  account: Sequelize.STRING(50),
  password: Sequelize.STRING(30),
  country: Sequelize.STRING(10),
}, {
  //使用自定义表名
  freezeTableName: true,
  timestamps: false
});

MysqlModule.UsersCreated = async (data) => {
  const user = await Users.create(data);
  console.log('created: ' + JSON.stringify(user));
};

module.exports = MysqlModule;