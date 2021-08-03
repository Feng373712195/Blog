export {}

const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema(
  {
    // 标题
    title: String,
    // 作者
    author: String,
    // 文章内容
    content: String,
    // 文章标签
    lables: [String],
    // 附件
    files: [String],
    // 点击量
    clicks: Number,
    // 创建时间
    createtime: Number,
    // 最后修改时间
    lasttime: Number
  }
);

mongoose.model('Draft', draftSchema)

module.exports = mongoose.model('Draft')
