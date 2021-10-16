const Koa = require('koa');
const path = require('path')
const sever = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
require('./db')

const app = new Koa();
app.use(bodyParser());
app.use(sever(path.resolve('static')))
app.use(router.routes())

app.listen('8081', () => {
  console.log('hello koa')
})


export {}
