const express = require('express')
const {
    getCards,
    getCard,
    getCardsByDeck,
    createCard,
    updateCard,
    deleteCard
} = require('../controllers/cardController')

const router = express.Router()

router.get('/', getCards)
router.get('/:id', getCard)
router.post('/', createCard)
router.patch('/:id', updateCard)
router.delete('/:id', deleteCard)
router.get('/deck/:deckId', getCardsByDeck)

module.exports = router