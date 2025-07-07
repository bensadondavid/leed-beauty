const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const pool = require('../db')


const logIn = async(req, res)=>{

    const secret = process.env.TOKEN_SECRET || 'ajkedzefjefefefefe'
    try{
        const {mailOrPhone, password} = req.body
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1 or phone = $1`,
            [mailOrPhone]
        )
        if(result.rows.length === 0){
        return res.status(400).json({message : 'Unknown Email or Phone number'})
        }
        const user = result.rows[0]
        const verifyPassword = await bcrypt.compare(password, user.password)
        if(!verifyPassword){
            return res.status(400).json({message : 'Invalid credentials'})
        }
        const token = jwt.sign({'userId' : String(user.id)}, secret, {expiresIn : '1h'})
        res.cookie('token', token,{
            httpOnly : true, 
            sameSite : 'None',
            secure : true,
            maxAge : 3600000,
            path : '/'
        }
        )
        const safeUser = {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            street: user.street,
            zip_code: user.zip_code,
            city: user.city
        }
        console.log('connected')
        res.status(200).json({message : 'Authentication successful', user : safeUser})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal Error'})
    }
}

module.exports = logIn