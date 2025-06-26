const pool = require('../db')

const deleteProduct = async(req, res)=>{
    try{
        const { id } = req.params
        const result = await pool.query(
            `DELETE FROM products where id = $1`,
            [id]
        )
        res.status(200).json({message : 'Product deleted'})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : "Impossible to delete the product"})
    }
}

module.exports = deleteProduct