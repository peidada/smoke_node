const router = require('koa-router')()
// const common = require('../public/javascripts/common');

//render渲染
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'smoke_nodes'
  })
})

//body 写给客户端
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/api/json', async (ctx, next) => {
  ctx.body = {
    title: '年轻人不讲武德，耗子尾汁'
  }
})

module.exports = router
