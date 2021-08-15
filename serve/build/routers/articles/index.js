"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('@koa/router');
const ArticleController = require('../../controllers/article');
const router = new Router();
router.post('/article', ArticleController.saveArticle);
router.delete('/article', ArticleController.deteleArticle);
router.put('/article', ArticleController.updateArticle);
router.get('/articles', ArticleController.getArticles);
module.exports = router;
//# sourceMappingURL=index.js.map