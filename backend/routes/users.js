const express = require('express')
const {
    getUser,
    registerUser,
    loginUser,
    deleteUser
} = require('../controllers/userController')

const router = express.Router()

router.get('/:id', getUser)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.delete('/:id', deleteUser)

module.exports = router