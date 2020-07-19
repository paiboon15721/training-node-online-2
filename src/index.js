const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const initMongoose = require('./models/initMongoose')
require('./models/user')
require('./models/post')
const r = require('./router')

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(r.routes())

const port = 3000
initMongoose().then(() => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})
