const express = require('express')
const router = express.Router()

const addUser = require('../lib/users/addUser')
const verifyUser = require('../lib/users/verifyUser')

router.post('/', addUser)
router.post('/verify', verifyUser)

module.exports = router 