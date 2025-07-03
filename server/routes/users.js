const express = require('express')
const router = express.Router()

const addUser = require('../lib/users/addUser')

router.post('/', addUser)

module.exports = router 