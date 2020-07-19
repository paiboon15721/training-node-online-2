// const initMongoose = require('../src/models/initMongoose')

before(async () => {
  console.log('before')
})

beforeEach(async () => {
  console.log('before Each')
})

after(() => {
  console.log('after')
})
