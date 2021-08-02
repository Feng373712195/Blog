"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const router = require('./router');
const app = new Koa();
app.use(router.routes());
app.listen('3030', () => {
    console.log('hello koa');
});
//# sourceMappingURL=app.js.map