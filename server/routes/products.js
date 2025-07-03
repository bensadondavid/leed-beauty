const express = require('express')
const router = express.Router()

const getAllProducts = require('../lib/products/getAllProducts')
const addProduct = require('../lib/products/addProduct')
const deleteProduct = require('../lib/products/deleteProduct')
const getProduct = require('../lib/products/getProduct')
const searchProducts = require('../lib/products/searchProducts')
const { route } = require('./users')

router.get('/', getAllProducts)
router.get('/search', searchProducts)
router.get('/:id', getProduct)
router.post('/', addProduct)
router.delete('/:id', deleteProduct)

module.exports = router