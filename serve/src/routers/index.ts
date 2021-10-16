
const Router = require('@koa/router');

const uploadRouter = require('./upload')
const articlesRouter = require('./articles')


const router = new Router();
router.use(articlesRouter.routes())
router.use(uploadRouter.routes())

module.exports = router
