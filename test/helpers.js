require('dotenv').config()
const initMongoose = require('../src/models/initMongoose')

const user = 'paiboon'
const dbName = `blogs${user}_test`

before(async () => {
  const mongoose = await initMongoose(dbName)
})

beforeEach(async () => {
  console.log('before Each')
})

after(() => {
  console.log('after')
})
