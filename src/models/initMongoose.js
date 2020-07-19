const mongoose = require('mongoose')

require('./user')
require('./post')

const { MONGO_HOST, MONGO_PASSWORD, MONGO_USER } = process.env

const user = 'paiboon'
const dbName = `blogs${user}`

const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${dbName}?retryWrites=true&w=majority`

const initMongoose = () =>
  new Promise((resolve, reject) => {
    mongoose
      .connect(mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .catch(err => {
        console.warn(`Error: ${err}`)
        return reject(err)
      })

    mongoose.connection.once('open', async () => {
      console.log('Database connected')
      return resolve()
    })
  })

module.exports = initMongoose
