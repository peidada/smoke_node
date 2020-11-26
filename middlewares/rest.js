const restfun = (pathPreFix) => {
  //REST API前缀，默认为 "/api/" ;
  pathPreFix = pathPreFix || '/api/';
  return async (ctx, next) => {
    //是否是REST API前缀
    /* startsWith() 方法用于检测字符串是否以指定的子字符串开始 */
    if(ctx.request.path.startsWith(pathPreFix)) {
      //绑定rest()方法
      ctx.rest = (data) => {
        ctx.response.type = 'application/json';
        ctx.response.body = data;
      }
      await next();
    }else{
      await next();
    }
  }
}

module.exports = restfun;