const pool = require('../db')

const verifyUser = async(req, res)=>{
    const { token } = req.body
    try{
        const result = await pool.query(
            `SELECT * FROM users WHERE email_verification_token = $1`,
            [token]
        )
        const user = result.rows[0]
        if(!user){
            return res.status(400).json({message : 'Invalid link or token'})
        }
        await pool.query(
            `UPDATE users
            SET email_verified = true, email_verification_token = null
            WHERE id = $1`,
            [user.id]
        )
        return res.status(200).json({message : 'Email verified successfully'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message : 'Internal server error', error : error.message})
    }
}

module.exports = verifyUser