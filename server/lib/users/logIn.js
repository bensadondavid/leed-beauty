const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const pool = require('../db')


const logIn = async(req, res)=>{

    const secret = process.env.TOKEN_SECRET
    try{
        const {mailOrPhone, password} = req.body
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1 or phone = $1`,
            [mailOrPhone]
        )
        if(user.rows.length !== 0){
        return res.status(500).json({message : 'Unknown Email or Phone number'})
        }
        const user = result.rows[0]
        const verifyPassword = await bcrypt.compare(password, user.password)
        if(!verifyPassword){
            return res.status(500).json({message : 'Wrong password'})
        }
        const token = jwt.sign({'userId' : user.id}, secret, {expiresIn : '1h'})
        res.cookie('token', token,{
            httpOnly : true, 
            sameSite : 'None',
            secure : true,
            maxAge : 3600000
        }
        )
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal Error'})
    }
}