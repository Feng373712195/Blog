
const Router = require('@koa/router');

const router = new Router();

router.get('/articles', async (ctx:any) => {
  ctx.body = 'hello'
})

module.exports = router

export {}
