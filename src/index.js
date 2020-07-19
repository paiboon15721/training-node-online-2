const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const initMongoose = require('./models/initMongoose')
require('./models/user')

const { User } = mongoose.models

const app = new Koa()
const r = new Router()

app.use(bodyParser())

r.get('/', ctx => {
  ctx.body = 'hello worldd'
})

r.get('/users', async ctx => {
  const { name } = ctx.query
  const find = {}
  if (name) {
    find.name = name
  }
  const users = await User.find(find, { password: 0 })
  ctx.body = users
})

r.get('/users/:id', async ctx => {
  const { id } = ctx.params
  const user = await User.findById(id)
  ctx.body = user
})

r.post('/users', async ctx => {
  const { body } = ctx.request
  const user = await User.create(body)
  ctx.body = user
})

r.del('/users/:id', async ctx => {
  const { id } = ctx.params
  const user = await User.findByIdAndDelete(id)
  ctx.body = user
})

r.put('/users/:id', async ctx => {
  const { id } = ctx.params
  const { body } = ctx.request
  const user = await User.findByIdAndUpdate(id, body, { new: true })
  ctx.body = user
})

app.use(logger())
app.use(r.routes())

const port = 3000
initMongoose().then(() => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})
