const Card = require('../models/cardModel')

//GET ALL CARDS
const getCards = async (req, res) => {
    const cards = await Card.find({})
    res.status(200).json(cards)
}

//GET SINGLE CARD
const getCard = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such card'})
    }

    const card = await Card.findById(id)

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(deck)
}

//CREATE NEW CARD
const createCard = async (req, res) => {
    const {deck, question, answer} = req.body
        try {
            const card = await Card.create({deck, question, answer})
            res.status(200).json(card)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
}

//UPDATE A CARD
const updateCard = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such card'})
    }

    const card = await Card.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (card) {
        return res.status(404).json({error: 'No such card'})
    }
    res.status(200).json(deck)
}

//DELETE A CARD
const deleteCard = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such card'})
    }

    const card = await Card.findOneAndDelete({_id: id})

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}

module.exports = {
    getCards,
    getCard,
    createCard,
    updateCard,
    deleteCard
}