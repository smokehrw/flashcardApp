const express = require('express')
require('dotenv').config()

//Express APP
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Route
app.get('/', (req, res) =>{
    res.json({msg: 'Welcome!'})
})

//Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})