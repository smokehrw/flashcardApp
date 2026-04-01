const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema({
    deckId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Deck'
    },
    question: String,
    answer: String
}, { timestamps: true })

module.exports = mongoose.model('Card', cardSchema)