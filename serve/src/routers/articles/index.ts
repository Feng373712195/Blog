export {}

const Router = require('@koa/router');
const ArticleController = require('../../controllers/article')

const router = new Router();

// 创建文章
router.post('/article', ArticleController.saveArticle)

// 删除文章
router.delete('/article', ArticleController.deteleArticle)

// 更新文章
router.put('/article', ArticleController.updateArticle)

// 获取文章列表
router.get('/articles', ArticleController.getArticles)

module.exports = router
