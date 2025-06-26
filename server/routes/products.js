const express = require('express')
const router = express.Router()
const getAllProducts = require('../lib/products/getAllProducts')
const addProduct = require('../lib/products/addProduct')

router.get('/', getAllProducts)
router.post('/', addProduct)

module.exports = router 