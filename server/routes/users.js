const express = require('express')
const router = express.Router()

const signIn = require('../lib/users/signIn')
const verifyUser = require('../lib/users/verifyUser')

router.post('/signin', signIn)
router.post('/verify', verifyUser)

module.exports = router 