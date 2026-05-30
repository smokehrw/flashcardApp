import User from '../models/userModel.js'
const mongoose = require('mongoose')

const getUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }
    
    res.status(200).json(user)
}

const registerUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.create({email, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndDelete
    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }
}

module.exports = {
    getUser,
    registerUser
}