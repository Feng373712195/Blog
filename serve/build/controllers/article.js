"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = exports.updateArticle = exports.deteleArticle = exports.saveArticle = void 0;
const articleService = require('../services/article');
const Result = require('./Result');
async function saveArticle(ctx) {
    let { article } = ctx.request.body;
    if (article) {
        ctx.body = new Result(false, '缺少必要参数 article');
        return;
    }
    try {
        const res = await articleService.save(article);
        ctx.body = new Result(true, { article: res });
    }
    catch (err) {
        ctx.body = new Result(false, err.message);
    }
}
exports.saveArticle = saveArticle;
async function deteleArticle(ctx) {
    let { id } = ctx.request.body;
    if (id) {
        ctx.body = new Result(false, '缺少必要参数 id');
        return;
    }
    try {
        const res = await articleService.remove(id);
        ctx.body = new Result(true, { article: res });
    }
    catch (err) {
        ctx.body = new Result(false, err.message);
    }
}
exports.deteleArticle = deteleArticle;
async function updateArticle(ctx) {
    let { id, article } = ctx.request.body;
    if (id) {
        ctx.body = new Result(false, '缺少必要参数 id');
        return;
    }
    if (article) {
        ctx.body = new Result(false, '缺少必要参数 article');
        return;
    }
    try {
        const res = await articleService.update(id, article);
        ctx.body = new Result(true, { article: res });
    }
    catch (err) {
        ctx.body = new Result(false, err.message);
    }
}
exports.updateArticle = updateArticle;
async function getArticles(ctx) {
    let { page = 1, size = 10 } = ctx.request.query;
    try {
        const res = await articleService.find(page, size);
        ctx.body = new Result(true, { articles: res });
    }
    catch (err) {
        ctx.body = new Result(false, err.message);
    }
}
exports.getArticles = getArticles;
//# sourceMappingURL=article.js.map