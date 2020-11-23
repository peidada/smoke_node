/* 

  在 app.use(router)之前调用

*/

const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

const response_formatter = async(ctx) => {
  
  //如果有返回数据，将返回数据添加到data中
  if(ctx.body) {
    ctx.body = {
      code: 0,
      message: 'success',
      data: JSON.parse(ctx.body)
    }
  }else {
    ctx.body = {
      code: 0,
      message: 'success'
    }
  }
  
}

const url_filter = (pattern) => {

  return async (ctx, next) => {

    const reg = new RegExp(pattern);

    try {
      
      //先去执行路由
      await next();

    } catch (error) {
      
      //如果异常类型是API异常并且通过正则验证的url，将错误信息添加到响应体中返回。
      if(error instanceof ApiError && reg.test(ctx.originalUrl)){

        ctx.body = JSON.stringify({
          code: error.code,
          message: error.message
        })

      }

      //继续抛，让外层中间件处理日志
      // throw error;

    }

    //通过正则的url进行格式化处理
    if(reg.test(ctx.originalUrl)) {
      response_formatter(ctx);
    }

  }

}

module.exports = url_filter;