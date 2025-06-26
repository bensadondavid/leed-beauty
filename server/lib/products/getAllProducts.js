const pool = require('../db')

const getAllProducts = async (req, res)=>{
    try{
        const result = await pool.query(
            `SELECT * FROM products`,
        )
        const products = result.rows
        res.status(200).json({products})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : 'Server error while fetching products'})
    }
}

module.exports = getAllProducts