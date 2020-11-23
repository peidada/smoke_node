/* 

域名 + 端口号 /api/功能类型/具体端口

127.0.0.1:3001/api/users/getUser

*/
const ApiError = require("../../error/ApiError");
const ApiErrorNames = require("../../error/ApiErrorNames");

/* 获取用户 */
exports.getUser = async(ctx, next) => {

  //如果id != 1 抛出API异常  抛出用户不存在
  if(ctx.query.id != 2) {
    throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
  }

  ctx.body = {
    username: 'smokepei',
    age: 26
  }
  
}

/* 用户注册 */
exports.registerUser = async(ctx, next) => {
   console.log('registerUser', ctx.request.body);
}