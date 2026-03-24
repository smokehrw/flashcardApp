const express = require('express')

const router = express.Router()

//GET all cards
router.get('/', (req, res) =>{
    res.json({msg: 'GET all cards'})
})

//GET single card
router.get('/:id', (req, res) => {
    res.json({msg: 'GET single card'})
})

//POST a new card
router.post('/', (req, res) => {
    res.json({msg: 'POST a new card'})
})

//UPDATE a card
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a card'})
})

//DELETE a card
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a card'})
})

module.exports = router