const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

let persons = [
    {    
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },    
    {    
        id: 3,
        name: "Dan Abramow",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello Worldd!!</h1>')
})
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
    console.log('morgan: ', morgan(':method :url :status :res[content-length] - :response-time ms'))
})

app.get('/api/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
            <p>${Date()}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id)) 
    : 0

    const person = req.body
    person.id = maxId +1
    console.log('req body: ', req.body)
   //tarkistetaan että nimi ja numero on syötetty
    if(person.name && person.number) {
        //tarkistetaan onko nimi jo listalla
        if(persons.find(j => person.name === j.name)){
            res.status(404).end(`Error: Name must be unique`)
        } else {
        persons = persons.concat(person)
        res.json(person)
        }
    } else {
        res.status(404).end(`Error: Name or number is missing`)
    }    
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
