const name = process.argv[2]
const number = process.argv[3]
require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)

const personSchema = new mongoose.Schema({
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

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number
})

if(name && number) {
  person.save()
    .then(response => {
      console.log(response)
      console.log(`Lisätään henkilö ${name} numero ${number} luetteloon`)
      mongoose.connection.close()
    })} else {

  Person
    .find()
    .then(response => {
      console.log(`Puhelinluettelo: ${response.map(i => i.name + ' ' + i.number)}`)
      mongoose.connection.close()
    })
}