/* 

域名 + 端口号 /api/功能类型/具体端口

127.0.0.1:3001/api/users/getUser

*/
const ApiError = require("../../error/ApiError");
const ApiErrorNames = require("../../error/ApiErrorNames");

const MysqlModule = require('../../config/db');

/* 获取用户 */
exports.getUser = async(ctx, next) => {

  // console.log(ctx.query); // { id：2}
  // console.log(ctx.querystring); // id=2

  //如果id != 1 抛出API异常  抛出用户不存在
  if(ctx.query.id != 1) {
    throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
  }

  ctx.body = {
    username: 'smokepei',
    age: 26
  }
  
}

/* 用户注册 */

/* 

  {
    username: 'smokepei',
    account: 13718195083,
    password: 'smoke0124.',
    country: CN,
  }

*/

exports.registerUser = async(ctx, next) => {
  console.log('registerUser', ctx.request.body); 
  // registerUser {username: 'smokepei', age: 28}

  if(ctx.request.body.username == '' || ctx.request.body.account == '' || ctx.request.body.password == '') {
    ctx.rest({
      status: 400,
      msg: '参数错误'
    });
  }else{
    /* 插入数据 */
    MysqlModule.UsersCreated(ctx.request.body);
    ctx.rest({
      status: 200,
      mag: '注册成功'
    });
  }
}