// Import de dependances
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Import de routes
const productsRoute = require('./routes/products')
const userRoute = require('./routes/users')

// Utilisation de dependances
app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))
app.use(cookieParser())

// Utilisation des routes
app.use('/products', productsRoute)
app.use('/users', userRoute)

module.exports = { app }