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
const Router = require('@koa/router');
const Article = require('../../model/article');
const router = new Router();
router.post('/article', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let { article } = ctx.request.body;
    const articleModel = new Article(article);
    if (article) {
        ctx.body = { code: 1, data: null, message: '缺少必要参数 article' };
        return;
    }
    try {
        const res = yield articleModel.save();
        ctx.body = { code: 0, data: { article: res } };
    }
    catch (err) {
        ctx.body = { code: 1, data: null, message: err.message };
    }
}));
router.get('/articles', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(ctx.request.body, 'ctx.request.body');
    let { page = 1, size = 10 } = ctx.request.body;
    try {
        const res = yield Article.find()
            .skip((page - 1) * size);
        ctx.body = { code: 0, data: { articles: res } };
    }
    catch (err) {
        ctx.body = { code: 1, data: null, message: err.message };
    }
}));
module.exports = router;
//# sourceMappingURL=index.js.map