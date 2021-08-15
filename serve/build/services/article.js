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
exports.find = exports.remove = exports.update = exports.save = void 0;
const Article = require('../models/article');
function save(article) {
    return __awaiter(this, void 0, void 0, function* () {
        const articleModel = new Article(article);
        const data = yield articleModel.save(article);
        if (data) {
            return data;
        }
        return null;
    });
}
exports.save = save;
function update(id, article) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield Article.update({ id }, article).exec();
        if (data) {
            return data;
        }
        return null;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield Article.remove({ _id: id }).exec();
        if (data) {
            return data;
        }
        return null;
    });
}
exports.remove = remove;
function find(page, size) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield Article.find().skip((page - 1) * size)
            .limit(size);
        if (data) {
            return data;
        }
        return [];
    });
}
exports.find = find;
//# sourceMappingURL=article.js.map