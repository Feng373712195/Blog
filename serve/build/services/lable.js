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
exports.remove = exports.save = void 0;
const Lable = require('../models/lable');
function save(label) {
    return __awaiter(this, void 0, void 0, function* () {
        const LableModel = new Lable(label);
        const data = yield LableModel.save(label);
        if (data) {
            return data;
        }
        return null;
    });
}
exports.save = save;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield Lable.remove({ _id: id }).exec();
        if (data) {
            return data;
        }
        return null;
    });
}
exports.remove = remove;
//# sourceMappingURL=lable.js.map