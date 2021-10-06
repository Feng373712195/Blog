import request from '@/utils/request';

export function  createArticle(params) {
  return request.post('/article')
}

export function  updateArticle(params) {
  return request.get('/article')
}

export function  deleteArticle(params) {
  return request.put('/article')
}

interface ArticleLiteItem {
  author: string
  clicks: number
  content: string
  createtime: string
  lables: any[]
  lasttime: number
  title: string
}

export function fetchArticles(page = 1,size = 10) {
  return request.get<{
    code:number,
    data:{ articles:ArticleLiteItem[] }
  }>('/articles',{
    params:{ page,size }
  })
}
