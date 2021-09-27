const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
require('./db')

const app = new Koa();
app.use(bodyParser());
app.use(router.routes())

app.listen('3030', () => {
  console.log('hello koa')
})


export {}