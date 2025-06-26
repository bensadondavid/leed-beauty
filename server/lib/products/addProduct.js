const pool = require('../db')

const addProduct = async(req, res)=>{
    try{
        const {
            name, slug, brand, color = null, price, quantity, description, image_url, category, is_active} = req.body
            const newInsert = await pool.query(
                `INSERT INTO products (name, slug, brand, color, price, quantity, description, image_url, category, is_active, created_at, updated_at)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
                [name, slug, brand, color, price, quantity, description, image_url, category, is_active]
            )
            const newProduct = newInsert.rows[0]
            res.status(201).json({message : 'Product added', product : newProduct})
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: 'Server error while adding product' });
    }
}

module.exports = addProduct