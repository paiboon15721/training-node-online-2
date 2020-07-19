const Router = require('koa-router')
const post = require('./components/post/controllers')
const user = require('./components/user/controllers')

const r = new Router()

post(r)
user(r)

module.exports = r
