const pool = require('../db')

const getProduct = async(req, res)=>{
    try{
        const { id } = req.params
        const result = await pool.query(
            `SELECT * FROM products WHERE id = $1`,
            [id]
        )
        const product = result.rows[0]
        res.status(200).json({product : product})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : 'No product found'})
    }
}

module.exports = getProduct