const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema({
    deck: Object,
    question: String,
    answer: String
}, { timestamps: true })

module.exports = mongoose.model('Card', cardSchema)