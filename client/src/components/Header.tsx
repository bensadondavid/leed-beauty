import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { SigninIcon } from "../assets/signInIcon"
import { LoopIcon } from "../assets/loopIcon"
import { HeartIcon } from "../assets/heartIcon"
import { Cart4LineDuotoneIcon } from "../assets/cartIcon"


function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loopBtn, setLoopBtn] = useState<boolean>(false)
  const [productsSearched, setProductsSearched] = useState([{id : 1, name : 'david'}, {id : 2, name : 'noa'}])
  const timeRef = useRef(null)
  const urlSearchProduct = import.meta.env.VITE_URL_FETCH_PRODUCTS

  const [search, setSearch] = useState<string>('')
  const handleSearch = async(e : React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value
    setSearch(value)
    if(timeRef.current){
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(async() => {
      try{
        const response = await fetch(urlSearchProduct, {
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify({ search : value })
        })
        const data = await response.json()
        setProductsSearched(data.products)
    }
    catch(error){
      console.log(error);
    }
    finally{
      timeRef.current = null
    }
    }, 500);
  }

  return (
    <>
    <header>
      <div className="header-row">

        <div className="left-side">
          <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={()=>setIsOpen(prev=> !prev)} >
              <span className="top-bar"></span>
              <span className="bottom-bar"></span>
          </button>
          <Link to='/signin'><SigninIcon /><span className="sign-in">Sign In</span></Link>
        </div>

        <p className="title">LEED BEAUTY</p>

        <div className="right-side">
          <button className="loop-button" onClick={()=>setLoopBtn(prev=>!prev)}><LoopIcon /></button>

           <div className={`loop ${loopBtn ? 'open' : ''}`}>
            <div className="loop-first-row">
              <p>LEED BEAUTY</p>
              <input type="text" name="search" value={search} onChange={handleSearch} placeholder="Search Products" />
              <button onClick={()=>setLoopBtn(prev=>!prev)}>Cancel</button>
            </div>
            <div className="loop-scnd-row">
              <ul>
                {productsSearched.map((product)=>(
                  <li key={product.id}>{product.name}</li>
                ))}
                </ul>
            </div>
          </div>

          <Link to={'/likes'}><HeartIcon className='likes' /></Link>
          <Link to={'/cart'}><Cart4LineDuotoneIcon /></Link>
        </div>
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link to='/products/face'>Face</Link>
          </li>
          <li>
            <Link to='/products/eyes'>Eyes</Link>
          </li>
          <li>
            <Link to='/products/lips'>Lips</Link>
          </li>
          <li>
            <Link to='/products/countouring'>Countouring</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header