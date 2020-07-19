const bcrypt = require('bcrypt')
const { User } = require('mongoose').models

module.exports = r => {
  r.post('/auth/register', async ctx => {
    const { body } = ctx.request
    const exist = await User.find({ email: body.email }).limit(1)
    if (exist.length) {
      ctx.status = 400
      ctx.body = 'email is in use'
      return
    }
    body.password = await bcrypt.hash(body.password, 10)
    const user = await User.create(body)
    ctx.body = user
  })

  r.post('/auth/login', async ctx => {
    ctx.body = 'login'
  })

  r.post('/auth/logout', async ctx => {
    ctx.body = 'logout'
  })
}
