import request from '@/utils/request';


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
  return request.get<{page:number,size:number},{ articles:ArticleLiteItem[] }>('/articles',{
    params:{ page,size }
  })
}
