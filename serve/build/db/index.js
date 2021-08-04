"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27019/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//# sourceMappingURL=index.js.map