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

const { Schema } = mongoose

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
})

mongoose.model('User', userSchema)

mongoose.connection.once('open', async () => {
  console.log('Database connected')

  const { User } = mongoose.models
  const john = new User()
  john.email = 'john@gmail.com'
  john.password = 'johnpassword'
  john.name = 'john'
  await john.save()

  const jane = {
    email: 'jane@gmail.com',
    password: 'janepassword',
    name: 'jane',
  }

  await User.create(jane)

  const users = await User.find()
  console.log(users)

  // User.find().then(users => {
  //   console.log(users)
  // })
})
