const pool = require('../db')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const refreshAccessToken = async(req, res)=>{
    try{
        const refreshToken = req.cookies['refresh-token']
        if(!refreshToken){
            return res.status(400).json({message : 'No refresh token found'})
        }
        const result = await pool.query(
            `SELECT * FROM refresh_tokens WHERE token = $1`, 
            [refreshToken]
        )
        if(result.rows.length === 0){
            return res.status(400).json({message : 'Invalid token'})
        }
        const verifyToken = result.rows[0]
        if(new Date(verifyToken.expires_at) < new Date()){
            return res.status(400).json({message : 'Expired token'})
        }
        const newToken = jwt.sign({userId : verifyToken.user_id}, secret, {expiresIn : "1h"})
        res.status(200).json({message : 'Access token created', accessToken : newToken})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : 'Internal server error'})
    }
}

module.exports = refreshAccessToken