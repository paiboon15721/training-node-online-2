const mongoose = require('mongoose')

const user = 'paiboon'
const password = 'mypassword'
const dbName = `blogs${user}`

const mongoUrl = `mongodb+srv://paiboon15721:${password}@cluster0.sqx0p.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

mongoose.connection.once('open', async () => {
  console.log('Database connected')
})
