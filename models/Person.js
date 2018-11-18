const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log(url)
mongoose.connect(url)

const Person = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    required: true,
    unique: true
  },
})
// const person = new Person(id = 956, name = 'Testi nimi', number = 423423423, {
// id,
// name,
// number
// })

// person
// .save()
// .then(response => {
//     console.log('person saved!')
//     mongoose.connection.close()
// })

module.exports = mongoose.model('Person', Person)