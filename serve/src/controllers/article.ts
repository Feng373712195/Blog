
const articleService = require('../services/article')
const Result = require('./Result')

// 创建文章
export async function saveArticle (ctx:any) {
  let { article } = ctx.request.body;
  if (article) {
    ctx.body = new Result(false, '缺少必要参数 article')
    return
  }
  try {
    const res = await articleService.save(article)
    ctx.body = new Result(true, { article: res })
  } catch (err) {
    ctx.body = new Result(false, err.message)
  }
}

// 删除文章
export async function deteleArticle (ctx:any) {
  let { id } = ctx.request.body;

  if (id) {
    ctx.body = new Result(false, '缺少必要参数 id')
    return
  }

  try {
    const res = await articleService.remove(id)
    ctx.body = new Result(true, { article: res })
  } catch (err) {
    ctx.body = new Result(false, err.message)
  }
}


// 更新文章
export async function updateArticle (ctx:any) {

  let { id, article } = ctx.request.body;
  if (id) {
    ctx.body = new Result(false, '缺少必要参数 id')
    return
  }
  if (article) {
    ctx.body = new Result(false, '缺少必要参数 article')
    return
  }
  try {
    const res = await articleService.update(id, article)
    ctx.body = new Result(true, { article: res })
  } catch (err) {
    ctx.body = new Result(false, err.message)
  }
}


export async function getArticles (ctx:any) {

  let { page = 1, size = 10 } = ctx.request.query;

  try {
    const res = await articleService.find(page, size)
    ctx.body = new Result(true, { articles: res })
  } catch (err) {
    ctx.body = new Result(false, err.message)
  }

}
