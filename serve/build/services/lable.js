"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.save = void 0;
const Lable = require('../models/lable');
async function save(label) {
    const LableModel = new Lable(label);
    const data = await LableModel.save(label);
    if (data) {
        return data;
    }
    return null;
}
exports.save = save;
async function remove(id) {
    const data = await Lable.remove({ _id: id }).exec();
    if (data) {
        return data;
    }
    return null;
}
exports.remove = remove;
//# sourceMappingURL=lable.js.map