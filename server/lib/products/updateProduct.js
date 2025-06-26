const pool = require('../db')


const updateProduct = async(req, res)=>{
    try{
        const { id } = req.params
        const { name, slug, brand, color = null, price, quantity, description, image_url, category, is_active } = req.body
        const result = await pool.query(
            `UPDATE products 
            SET name = $2, slug = $3, brand = $4, color = $5, price = $6, quantity = $7, description = $8, image_url = $9,
            category = $10, is_active = $11
            WHERE id = $1
            RETURNING *`,
            [id, name, slug, brand, color, price, quantity, description, image_url, category, is_active ]
        )
        const product = result.rows[0]
        res.status(200).json({product : product})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : "Error updating the product"})
    }
}

module.exports = updateProduct