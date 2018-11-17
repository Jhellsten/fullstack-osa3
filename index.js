const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

const Person = '/models/Person.js'

const url = process.env.MONGODB_URI
mongoose.connect(url, { useNewUrlParser: true })

const formatPerson = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

let persons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Martti Tienari', number: '040-123456', id: 2 },
    { name: 'Arto Järvinen', number: '040-123456', id: 3 },
    { name: 'Lea Kutvonen', number: '040-123456', id: 4 }
  ]

morgan.token('body', function getBody (req) {
  return JSON.stringify(req.body)
})
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :body - :status :res[content-length] - :response-time'))

app.get('/api/', (request, response) => {
  try {
    response.send('<h1>Hello World!</h1>')
  } catch (error) {
    console.log(error)
    response.status(404).end()
  }    
})

app.get('/api/persons', async (request, response) => {
  try {
    const res = await Person.find({})
    response.json(res.map(formatPerson()))
  } catch (error) {
    console.log(error)
    response.status(404).end()
  }  
  
})
app.get('/api/persons/:id', async (request, response) => {
  try {
    const person = await Person.findById(request.params.id)
    response.json(formatPerson(person))
  if ( person ) {
    response.json(person)
  } else {
    response.status(404).end()
  }
  } catch (error) {
    response.status(404).end()
  }
})
app.get('/api/info', (request, response) => {
  try {
    const date = new Date(Date.now()).toUTCString()
    response.send(`Puhelinluettelossa on ${persons.length} henkilön tiedot
    
    ${date}
    `)
  } catch (error) {
    response.status(404).end()
  } 
})
app.post('/api/persons', async (request, response) => {
  try {
    const body = request.body
    const id = Math.floor(Math.random() * Math.floor(1000))
  
    if (body.name === undefined) {
      return response.status(400).json({error: 'name missing'})
    }
    if (body.number === undefined) {
      return response.status(400).json({error: 'number missing'})
    }
  
    const person = new Person({
      id,
      name: body.name,
      number: body.number
    })
    // if(persons.filter(person => person.name === body.name)) {
    //   throw new Error('name must be unique')
    // }
    // if(persons.filter(person => person.number === body.number).length > 0) {
    //   throw new Error('number must be unique')
    // }
  
    const savedPerson = await person.save()
    response.json(formatPerson())
  
  } catch (error) {
    response.status(404).end()
  }

})
app.delete('/api/persons/:id', (request, response) => {
  try {
    const id = Number(request.params.id)
  person = persons.filter(person => person.id === id)
  if ( person ) {
    response.status(204).end()
  } else {
    response.status(404).end()
  }
  } catch (error) {
    response.status(404).end()
  }
  
  })

app.get('*', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})