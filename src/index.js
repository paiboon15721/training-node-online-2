const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
require('./models/initMongoose')

const app = new Koa()
const r = new Router()

r.get('/', ctx => {
  ctx.body = 'hello world'
})

app.use(logger())
app.use(r.routes())

app.use(ctx => {
  ctx.body = 'hello word'
})

const port = 3000
app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
