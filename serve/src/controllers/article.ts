
const articleService = require('../models/article')

// 创建文章
export async function saveArticle (ctx:any) {

  let { article } = ctx.request.body;

  if (article) {
    ctx.body = { code: 1, data: null, message: '缺少必要参数 article' }
    return
  }

  try {
    const res = await articleService.save(article)
    ctx.body = { code: 0, data: { article: res } }
  } catch (err) {
    ctx.body = { code: 1, data: null, message: err.message }
  }

}

// 删除文章
export async function deteleArticle (ctx:any) {
  let { id } = ctx.request.body;

  if (id) {
    ctx.body = { code: 1, data: null, message: '缺少必要参数 id' }
    return
  }

  try {
    const res = await articleService.remove(id)
    ctx.body = { code: 0, data: { article: res } }
  } catch (err) {
    ctx.body = { code: 1, data: null, message: err.message }
  }
}


// 更新文章
export async function updateArticle (ctx:any) {

  let { id, article } = ctx.request.body;

  if (id) {
    ctx.body = { code: 1, data: null, message: '缺少必要参数 id' }
    return
  }

  if (article) {
    ctx.body = { code: 1, data: null, message: '缺少必要参数 article' }
    return
  }

  try {
    const res = await articleService.update(id, article)
    ctx.body = { code: 0, data: { article: res } }
  } catch (err) {
    ctx.body = { code: 1, data: null, message: err.message }
  }

}


export async function getArticles (ctx:any) {

  console.log(ctx.request.body, 'ctx.request.body')
  let { page = 1, size = 10 } = ctx.request.body;

  try {
    const res = await articleService.find(page, size)
    ctx.body = { code: 0, data: { articles: res } }
  } catch (err) {
    ctx.body = { code: 1, data: null, message: err.message }
  }

}
