const Sequelize = require('sequelize');

const config = require('./config');

let PetMysql = {};

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

const Pet = sequelize.define('pets', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  //使用自定义表名
  freezeTableName: true,
  timestamps: false
});

const now = Date.now();

PetMysql.PetCreated = async () => {
  console.log(222);
  const dog = await Pet.create({
    id: 'd-' + now,
    name: 'dog',
    gender: false,
    birth: '2008-08-08',
    createdAt: now,
    updatedAt: now,
    version: 0
  })
  console.log('created: ' + JSON.stringify(dog));
};

module.exports = PetMysql;