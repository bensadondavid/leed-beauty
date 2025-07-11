const express = require('express')
const router = express.Router()

const signIn = require('../lib/users/signIn')
const verifyUser = require('../lib/users/verifyUser')
const logIn = require('../lib/users/logIn')
const resetPassword = require('../lib/users/resetPassword')
const newPassword = require('../lib/users/newPassword')
const refreshAccessToken = require('../lib/users/refreshAccessToken')

router.post('/sign-in', signIn)
router.post('/verify-email', verifyUser)
router.post('/login', logIn)
router.post('/forgot-password', resetPassword)
router.post('/reset-password', newPassword)
router.get('/refresh-token', refreshAccessToken)

module.exports = router 