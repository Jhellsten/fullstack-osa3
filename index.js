const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

const Person =  require('./models/Person')

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
    if(res.length === 0) {
      return []
    }
    const formatted = await res.map(i => formatPerson(i))
    response.json(formatted)
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
    // const id = Math.floor(Math.random() * Math.floor(1000))
  
    if (body.name === undefined) {
      return response.status(400).json({error: 'name missing'})
    }
    if (body.number === undefined) {
      return response.status(400).json({error: 'number missing'})
    }
  
    const person = new Person({
      name: body.name,
      number: body.number
    })
    console.log(person)
    const existingPerson = await Person.findOne({name: body.name})
    if(existingPerson) {
      response.status(400).end()
    }
    const existingNumber = await Person.findOne({name: body.number})
    if(existingNumber) {
      response.status(400).end()
    }
  
    const savedPerson = await person.save()
    response.json(formatPerson(savedPerson))
  
  } catch (error) {
    response.status(404).end()
  }

})

app.put('/api/persons/:id', async (request, response) => {
  try {
    const { number } = request.body
    const existingNumber = await Person.findOne({number}, (err, person) => {
      if(err) {
        console.log(err)
      } if(person) {
        response.status(400).send({error: 'number is in use'})
      }
    })
    await Person.findOneAndUpdate({_id: request.params.id}, {number}, (err, person) => {
      if(err) {
        response.status(400).send({ error: 'malformatted id' })
      } else {
        response.json(formatPerson(person))
      }
    })
  } catch (error) {
    console.log(error)
    response.status(400).send({ error: 'malformatted id' })
  }
  
})
app.delete('/api/persons/:id', async (request, response) => {
  try {
    const person = await Person.findByIdAndDelete(request.params.id)
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