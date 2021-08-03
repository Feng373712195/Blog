export {}

const mongoose = require('mongoose');

const lableSchema = new mongoose.Schema(
  {
    // 标签内容
    text: String,
    // 相关文章数量
    relationNum: Number
  }
);

mongoose.model('Lable', lableSchema)

module.exports = mongoose.model('Lable')
