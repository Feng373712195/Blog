"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = exports.updateArticle = exports.deteleArticle = exports.saveArticle = void 0;
const articleService = require('../services/article');
function saveArticle(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        let { article } = ctx.request.body;
        if (article) {
            ctx.body = { code: 1, data: null, message: '缺少必要参数 article' };
            return;
        }
        try {
            const res = yield articleService.save(article);
            ctx.body = { code: 0, data: { article: res } };
        }
        catch (err) {
            ctx.body = { code: 1, data: null, message: err.message };
        }
    });
}
exports.saveArticle = saveArticle;
function deteleArticle(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id } = ctx.request.body;
        if (id) {
            ctx.body = { code: 1, data: null, message: '缺少必要参数 id' };
            return;
        }
        try {
            const res = yield articleService.remove(id);
            ctx.body = { code: 0, data: { article: res } };
        }
        catch (err) {
            ctx.body = { code: 1, data: null, message: err.message };
        }
    });
}
exports.deteleArticle = deteleArticle;
function updateArticle(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id, article } = ctx.request.body;
        if (id) {
            ctx.body = { code: 1, data: null, message: '缺少必要参数 id' };
            return;
        }
        if (article) {
            ctx.body = { code: 1, data: null, message: '缺少必要参数 article' };
            return;
        }
        try {
            const res = yield articleService.update(id, article);
            ctx.body = { code: 0, data: { article: res } };
        }
        catch (err) {
            ctx.body = { code: 1, data: null, message: err.message };
        }
    });
}
exports.updateArticle = updateArticle;
function getArticles(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        let { page = 1, size = 10 } = ctx.request.query;
        try {
            const res = yield articleService.find(page, size);
            ctx.body = { code: 0, data: { articles: res } };
        }
        catch (err) {
            ctx.body = { code: 1, data: null, message: err.message };
        }
    });
}
exports.getArticles = getArticles;
//# sourceMappingURL=article.js.map