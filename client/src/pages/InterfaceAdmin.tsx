import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

interface Products{
    id : number
    name : string,
    slug : string, 
    brand : string, 
    color : string,
    price : number,
    quantity : number,
    description : string,
    image_url : string, 
    category : string,
    is_active : boolean
}

const url = import.meta.env.VITE_URL_PRODUCT || 'http://localhost:3000/products'

function InterfaceAdmin() {

    // const navigate = useNavigate()
    // const privateRoute = () : void =>{
    //     const token : string = Cookies.get('token')
    //     if(!token){
    //         navigate('/')
    //     }
    // }

    // useEffect(()=>{
    //     privateRoute()
    // },[])

    const [products, setProducts] = useState<Products[]>([])

    const fetchProduct = async()=>{
        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('Fetch products failed')
            }
            const data = await response.json()
            setProducts(data.products)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])

  return (
    
    <div className="interface">
                <table>
                <caption>
                    Products
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image Url</th>
                        <th scope="col">Category</th>
                        <th scope="col">Is Active</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td scope="row">
                            <input type="text" value={product.name} /></td>
                        <td scope="row">{product.slug}</td>
                        <td scope="row">{product.brand}</td>
                        <td scope="row">{product.color}</td>
                        <td scope="row">{product.price}</td>
                        <td scope="row">{product.quantity}</td>
                        <td scope="row">{product.description}</td>
                        <td scope="row">{product.image_url}</td>
                        <td scope="row">{product.category}</td>
                        <td scope="row">{product.is_active}</td>
                    </tr>
                ))}
                </tbody>
                </table>
    </div>

 )

}
export default InterfaceAdmin