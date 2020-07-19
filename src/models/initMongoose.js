const mongoose = require('mongoose')

const user = 'paiboon'
const password = 'mypassword'
const dbName = `blogs${user}`

const mongoUrl = `mongodb+srv://paiboon15721:${password}@cluster0.sqx0p.mongodb.net/${dbName}?retryWrites=true&w=majority`

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
