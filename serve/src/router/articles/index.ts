
const Router = require('@koa/router');
const Article = require('../../model/article')

import { ArticleInter } from '../../model/index.d';

const router = new Router();

router.post('/article', async (ctx:any) => {

  let { article } = ctx.request.body;
  const articleModel = new Article(article);

  if (article) {
    ctx.body = { code: 1, data: null, message: '缺少必要参数 article' }
    return
  }

  try {
    const res = await articleModel.save()
    ctx.body = { code: 0, data: { article: res } }
  } catch (err) {
    ctx.body = { code: 1, data: null, message: err.message }
  }
})

module.exports = router
