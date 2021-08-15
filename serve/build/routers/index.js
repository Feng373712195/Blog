const Router = require('@koa/router');
const articlesRouter = require('./articles');
const router = new Router();
router.use(articlesRouter.routes());
module.exports = router;
//# sourceMappingURL=index.js.map