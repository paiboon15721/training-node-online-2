const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const mongoose = require('mongoose')
require('./models/initMongoose')
require('./models/user')

const { User } = mongoose.models

const app = new Koa()
const r = new Router()

r.get('/', ctx => {
  ctx.body = 'hello world'
})

r.get('/users', async ctx => {
  const users = await User.find()
  ctx.body = users
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
