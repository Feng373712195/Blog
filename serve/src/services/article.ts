const Article = require('../models/article')

import { ArticleInter } from '../models/index.d'

export async function save (article:ArticleInter) {
  const articleModel = new Article(article);
  const data = await articleModel.save(article)
  if (data) {
    return data
  }
  return null
}

export async function update (id:string, article:ArticleInter) {
  const data = await Article.update({ id }, article).exec()
  if (data) {
    return data
  }
  return null
}

export async function remove (id:string) {
  const data = await Article.remove({ _id: id }).exec()
  if (data) {
    return data
  }
  return null
}

export async function find (page:number, size:number) {
  console.log('find', page, size);
  const data = await Article.find().skip((page - 1) * size)
    .limit(Number(size))

  if (data) {
    return data
  }
  return []
}

