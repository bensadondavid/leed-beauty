const pool = require('../db')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const sendMail = require('./sendEmail')

const addUser = async(req, res)=>{
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
    const { name, lastname, email, password, phone, street, zip_code, city } = req.body
    try{
        // Look for an existing user
        const user = await pool.query(
            `SELECT * FROM users WHERE
             LOWER(email) = LOWER($1)
             OR phone = $2`,
            [email, phone]
        )
         if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters' })
        }
        if(user.rows.length !== 0){
            return res.status(409).json({message : 'Phone number or email already taken'})
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        const emailToken = crypto.randomBytes(32).toString('hex')
        // Creating a new user
        const result = await pool.query(
            `INSERT INTO users (name, lastname, email, email_verification_token, password, phone, street, zip_code, city)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) 
            RETURNING *`,
            [name, lastname, email, emailToken, hashedPassword, phone, street, zip_code, city]
        )
        // Sending a confirmation email
        const verificationLink = `${baseUrl}/verify?token=${emailToken}`
        await sendMail(
            email,
            'VERIFICATION OF YOUR EMAIL ADDRESS',
            `
            <div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; padding: 20px;">
                <h1>Hello ${name}</h1>
                <p>Please click on the link below to verify your email address:</p>
                <a href="${verificationLink}" style="color: #1a73e8; text-decoration: none;">${verificationLink}</a>
            </div>
            `
        )
        res.status(201).json({message : 'New user added'})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : error})
    }
}

module.exports = addUser