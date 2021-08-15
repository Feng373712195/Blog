"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const lableSchema = new mongoose.Schema({
    text: String,
    relationNum: Number
});
mongoose.model('Lable', lableSchema);
module.exports = mongoose.model('Lable');
//# sourceMappingURL=lable.js.map