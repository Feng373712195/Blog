"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routers');
require('./db');
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
app.listen('8081', () => {
    console.log('hello koa');
});
//# sourceMappingURL=app.js.map