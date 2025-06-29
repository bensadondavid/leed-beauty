const pool = require('../db')


const searchProducts = async(req, res)=>{
    try{
        const { search } = req.query
        const result = await pool.query(
            `SELECT * FROM products where name ILIKE $1 LIMIT 3`,
            [`${search}%`]
        )
        const products = result.rows
        res.status(200).json({products : products})
    }
    catch(error){
    console.log(error);
    res.status(500).json({message : error})
    }
}

module.exports = searchProducts