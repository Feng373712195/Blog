import request from '@/utils/request';

export function  createArticle(params) {
  return request.post('/article')
}
