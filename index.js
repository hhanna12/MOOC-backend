require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

let persons = [
    {    
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },    
    {    
        id: 3,
        name: 'Dan Abramow',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello Worldd!!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
    console.log('morgan: ', morgan(':method :url :status :res[content-length] - :response-time ms'))
})

app.get('/info', (req, res) => {
    Person.find({}).then(persons => {    
        res.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${Date()}</p>`)
    })
})

app.get('/api/persons/:id', (req, res, next) => {    
    //hakee id:n perusteella tietokannasta yksittäisen hlön
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    console.log('poistossa id: ', req.params.id)
    Person.findByIdAndRemove(req.params.id)
        .then(res.status(204).end())
        .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => n.id)) 
        : 0

    const person = req.body
    person.id = maxId +1
    //tarkistetaan että nimi ja numero on syötetty
    if(person.name && person.number) {
        //tarkistetaan onko nimi jo listalla
        if(persons.find(j => person.name === j.name)){
            res.status(404).end('Error: Name must be unique')
        } else {
            const person = new Person({
                name: req.body.name,
                number: req.body.number
            })

            person.save().then(savedPerson => {
                res.json(savedPerson)
            })
        }
    } else {
        res.status(404).end('Error: Name or number is missing')
    }    
})

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    if(error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})