const express = require('express')
const {
    getDecks,
    getDeck,
    createDeck,
    updateDeck,
    deleteDeck
} = require('../controllers/deckController')

const router = express.Router()

router.get('/', getDecks)
router.get('/:id', getDeck)
router.post('/', createDeck)
router.patch('/:id', updateDeck)
router.delete('/:id', deleteDeck)

module.exports = router