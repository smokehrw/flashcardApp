const express = require('express')
const {
    getCards,
    getCard,
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

module.exports = router