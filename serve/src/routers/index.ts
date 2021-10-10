
const Router = require('@koa/router');

const uploadRouter = require('./upload')
const articlesRouter = require('./articles')


const router = new Router();
router.use(uploadRouter.routes())
router.use(articlesRouter.routes())

module.exports = router
