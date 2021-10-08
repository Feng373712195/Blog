const Lable = require('../models/lable')

import { LableInter } from './lable.d'

export async function save (label:LableInter) {
  // 需要查询关联标签有多少篇文章 然后自增

  const LableModel = new Lable(label);
  const data = await LableModel.save(label)
  if (data) {
    return data
  }
  return null
}

export async function remove (id:string) {
  // 需要查询关联标签有多少篇文章 然后自减

  const data = await Lable.remove({ _id: id }).exec()
  if (data) {
    return data
  }
  return null
}
