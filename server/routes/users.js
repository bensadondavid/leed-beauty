const express = require('express')
const router = express.Router()

const signIn = require('../lib/users/signIn')
const verifyUser = require('../lib/users/verifyUser')
const logIn = require('../lib/users/logIn')

router.post('/signin', signIn)
router.post('/verify', verifyUser)
router.post('/login', logIn)

module.exports = router 