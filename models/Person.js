const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log(url)
mongoose.connect(url)
const Person = mongoose.model('Person', {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
  })
const person = new Person(id = 956, name = 'Testi nimi', number = 423423423, {
id,
name,
number
})

const formatPerson = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

person
.save()
.then(response => {
    console.log('person saved!')
    mongoose.connection.close()
})

module.exports = mongoose.model('Person', personSchema)