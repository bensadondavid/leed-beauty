const express = require('express')
const router = express.Router()

const signIn = require('../lib/users/signIn')
const verifyUser = require('../lib/users/verifyUser')
const logIn = require('../lib/users/logIn')
const resetPassword = require('../lib/users/resetPassword')

router.post('/signin', signIn)
router.post('/verify', verifyUser)
router.post('/login', logIn)
router.post('/reset', resetPassword)

module.exports = router 