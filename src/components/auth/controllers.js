const { User } = require('mongoose').models

module.exports = r => {
  r.post('/auth/register', async ctx => {
    const { body } = ctx.request
    ctx.body = body
  })

  r.post('/auth/login', async ctx => {
    ctx.body = 'login'
  })

  r.post('/auth/logout', async ctx => {
    ctx.body = 'logout'
  })
}
