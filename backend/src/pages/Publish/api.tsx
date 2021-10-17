
import request, { Respone } from '@/utils/request';


export function  createArticle(params) {
  return request.post('/article')
}

export function  updateArticle(params) {
  return request.get('/article')
}

export function  deleteArticle(params) {
  return request.put('/article')
}
