const router = require('koa-router')()
const common = require('../public/javascripts/common');

//render渲染
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

//body 写给客户端
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  let data = {
    title: 'koa2 jsonss'
  }
  ctx.body = common.jsonFun(200, data, 'success');
})

module.exports = router
