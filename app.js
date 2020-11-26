const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/default/index')
const users = require('./routes/default/users')

const PetMysql = require('./config/db');

const api = require('./routes/api/user_router');
const response_formatter = require('./middlewares/response_formatter');

const rest = require('./middlewares/rest');

// error handler
onerror(app)

// middlewares
/* koa-bodyparser中间件, 可以将post请求的参数转化为json格式返回 */
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

/* 添加格式化处理响应结果的中间件，在添加路由之前调用 */
app.use(response_formatter('^/api'));
app.use(rest())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()
// 用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.
// 此时根据ctx.status设置response响应头
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(api.routes(), api.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  // console.error('server error', err, ctx)
});

module.exports = app
