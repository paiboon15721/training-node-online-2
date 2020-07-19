require('dotenv').config()
const initMongoose = require('../src/models/initMongoose')

const user = 'paiboon'
const dbName = `blogs${user}_test`

let mongoose

before(async () => {
  mongoose = await initMongoose(dbName)
})

beforeEach(async () => {
  await mongoose.connection.dropDatabase()
})

after(() => {
  mongoose.models = {}
})
