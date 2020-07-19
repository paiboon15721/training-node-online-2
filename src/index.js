const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = 'hello word'
})

const port = 3000
app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
