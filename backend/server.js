const express = require('express')
require('dotenv').config()

//Express APP
const app = express()
const cardsRoutes = require('./routes/cards')
const deckRoutes = require('./routes/decks')
const mongoose = require('mongoose')

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/cards', cardsRoutes)
app.use('/api/decks', deckRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("Connected to DB")
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)
    })

