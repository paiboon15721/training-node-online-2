const mongoose = require('mongoose')

const user = 'paiboon'
const password = 'mypassword'
const dbName = `blogs${user}`

const mongoUrl = `mongodb+srv://paiboon15721:${password}@cluster0.sqx0p.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(mongoUrl)

mongoose.connection.once('open', () => {
  console.log('Database connected')
})
