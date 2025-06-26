// Import de dependances
const express = require('express')
const app = express()
const cors = require('cors')

// Import de routes
const productsRoute = require('./routes/products')

// Utilisation de dependances
app.use(express.json())
app.use(cors())

// Utilisation des routes
app.use('/products', productsRoute)

module.exports = { app }