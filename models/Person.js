const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
mongoose.connect(url)

const Person = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('Person', Person)