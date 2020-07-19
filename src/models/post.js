const mongoose = require('mongoose')

const { Schema } = mongoose

const postSchema = new Schema({
  title: String,
  detail: String,
})

mongoose.model('Post', postSchema)
