// Import de dependances
const express = require('express')
const app = express()
const cors = require('cors')

// Import de routes
const productsRoute = require('./routes/products')
const userRoute = require('./routes/users')

// Utilisation de dependances
app.use(express.json())
app.use(cors())

// Utilisation des routes
app.use('/products', productsRoute)
app.use('/users', userRoute)

module.exports = { app }