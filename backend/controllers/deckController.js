const Deck = require('../models/deckModel')
const mongoose = require('mongoose')

//GET ALL DECKS
const getDecks = async (req, res) => {
    const decks = await Deck.find({})
    res.status(200).json(decks)
}

//GET SINGLE DECK
const getDeck = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such deck'})
    }

    const deck = await Deck.findById(id)

    if (!deck) {
        return res.status(404).json({error: 'No such deck'})
    }

    res.status(200).json(deck)
}

//CREATE NEW DECK
const createDeck = async (req, res) => {
    const {title, description} = req.body
        try {
            const deck = await Deck.create({title, description})
            res.status(200).json(deck)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
}

//UPDATE A DECK
const updateDeck = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such deck'})
    }

    const deck = await Deck.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!deck) {
        return res.status(404).json({error: 'No such deck'})
    }
    res.status(200).json(deck)
}

//DELETE A DECK
const deleteDeck = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such deck'})
    }

    const deck = await Deck.findOneAndDelete({_id: id})

    if (!deck) {
        return res.status(404).json({error: 'No such deck'})
    }

    res.status(200).json(deck)
}

module.exports = {
    getDecks,
    getDeck,
    createDeck,
    updateDeck,
    deleteDeck
}