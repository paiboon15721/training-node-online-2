const mongoose = require('mongoose')

const mongoUrl =
  'mongodb+srv://paiboon15721:mypassword@cluster0.sqx0p.mongodb.net/blogs?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)

mongoose.connection.once('open', () => {
  console.log('Database connected')
})
