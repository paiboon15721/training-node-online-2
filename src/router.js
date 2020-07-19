const Router = require('koa-router')
const post = require('./components/post/controllers')
const user = require('./components/user/controllers')
const auth = require('./components/auth/controllers')

const r = new Router()

post(r)
user(r)
auth(r)

module.exports = r
