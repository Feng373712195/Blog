"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    lables: [String],
    files: [String],
    clicks: Number,
    createtime: Number,
    lasttime: Number
});
mongoose.model('Article', articleSchema);
module.exports = mongoose.model('Article');
//# sourceMappingURL=article.js.map