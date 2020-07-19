// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const jwtSign = promisify(jwt.sign)
const jwtVerify = promisify(jwt.verify)

const secret = 'supersecretkey'

const app = async () => {
  // const hash = await bcrypt.hash('mypassword', 10)
  // console.log(hash)
  // const result = await bcrypt.compare('mypasswordd', hash)
  // console.log(result)
  try {
    const token = await jwtSign(
      { id: 'userpk', email: 'test@email.com' },
      secret,
    )
    console.log(token)
    const user = await jwtVerify(token, secret)
    console.log(user)
  } catch (err) {
    console.log('Token is invalid')
  }
}

app()
