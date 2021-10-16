"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.remove = exports.update = exports.save = void 0;
const Article = require('../models/article');
async function save(article) {
    const articleModel = new Article(article);
    const data = await articleModel.save(article);
    if (data) {
        return data;
    }
    return null;
}
exports.save = save;
async function update(id, article) {
    const data = await Article.update({ id }, article).exec();
    if (data) {
        return data;
    }
    return null;
}
exports.update = update;
async function remove(id) {
    const data = await Article.remove({ _id: id }).exec();
    if (data) {
        return data;
    }
    return null;
}
exports.remove = remove;
async function find(page, size) {
    const data = await Article.find().skip((page - 1) * size)
        .limit(Number(size));
    if (data) {
        return data;
    }
    return [];
}
exports.find = find;
//# sourceMappingURL=article.js.map