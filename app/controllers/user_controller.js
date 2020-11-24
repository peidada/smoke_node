/* 

域名 + 端口号 /api/功能类型/具体端口

127.0.0.1:3001/api/users/getUser

*/
const ApiError = require("../../error/ApiError");
const ApiErrorNames = require("../../error/ApiErrorNames");

const PetMysql = require('../../config/db');

/* 获取用户 */
exports.getUser = async(ctx, next) => {

  // console.log(ctx.query); // { id：2}
  // console.log(ctx.querystring); // id=2

  //如果id != 1 抛出API异常  抛出用户不存在
  if(ctx.query.id != 1) {
    throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
  }

  // PetMysql.PetCreated();

  ctx.body = {
    username: 'smokepei',
    age: 26
  }
  
}

/* 用户注册 */
exports.registerUser = async(ctx, next) => {
  console.log('registerUser', ctx.request.body);
  ctx.body = ctx.request.body;
}