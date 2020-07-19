const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const jwtVerify = promisify(jwt.verify)

exports.requireAuth = async (ctx, next) => {
  const token = ctx.cookies.get('jwt')
  if (!token) {
    ctx.status = 400
    ctx.body = 'jwt must be provided'
    return
  }
  ctx.state.user = await jwtVerify(token, process.env.JWT_SECRET)
  await next()
}
