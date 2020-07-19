require('dotenv').config()
const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const initMongoose = require('./models/initMongoose')
const r = require('./router')

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(r.routes())

const user = 'paiboon'
const dbName = `blogs${user}`
const port = 3000
initMongoose(dbName).then(() => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})
