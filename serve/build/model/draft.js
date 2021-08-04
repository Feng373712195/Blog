"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const draftSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    lables: [String],
    files: [String],
    clicks: Number,
    createtime: Number,
    lasttime: Number
});
mongoose.model('Draft', draftSchema);
module.exports = mongoose.model('Draft');
//# sourceMappingURL=draft.js.map