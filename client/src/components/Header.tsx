import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { SigninIcon } from "../assets/signInIcon"
import { LoopIcon } from "../assets/loopIcon"
import { HeartIcon } from "../assets/heartIcon"
import { CartIcon } from "../assets/cartIcon"
import { useSelector } from "react-redux"


function Header() {

  const state = useSelector(state=> state.users)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loopBtn, setLoopBtn] = useState<boolean>(false)
  const [productsSearched, setProductsSearched] = useState([])
  const [search, setSearch] = useState<string>('')
  const timeRef = useRef<NodeJS.Timeout | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const urlSearchProduct = import.meta.env.VITE_URL_FETCH_PRODUCTS || 'http://localhost:3000/products'
  const isAuthenticated = Boolean(state?.user)

  const handleSearch = async() =>{
    if(timeRef.current){
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(async() => {
      try{
        if(abortRef.current){
          abortRef.current.abort()
        }
        const controller = new AbortController()
        abortRef.current = controller
        const params = new URLSearchParams({ search })
        const response = await fetch(`${urlSearchProduct}/search?${params.toString()}`, {signal : controller.signal})
        const data = await response.json()
        setProductsSearched(data.products)
    }
    catch(error){
      console.log(error);
    }
    finally{
      timeRef.current = null
      abortRef.current = null
    }
    }, 500);
  }

   useEffect(()=>{
    if (search.trim().length === 0) {
      setProductsSearched([])
      // Abort any pending requests when search is cleared
      if (abortRef.current) {
        abortRef.current.abort();
        abortRef.current = null;
      }
      if (timeRef.current) {
        clearTimeout(timeRef.current);
        timeRef.current = null;
      }
      return
    }
    handleSearch()

    // Cleanup function: This runs when the component unmounts or before the effect re-runs
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      if (abortRef.current) {
        abortRef.current.abort(); // Abort any ongoing fetch request
      }
    };
  },[search])

  const handleCancel = ()=>{
    setLoopBtn(prev=> !prev)
    setSearch('')
    setProductsSearched([])
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
          <Link to={isAuthenticated ? '/my-account' : '/login'}><SigninIcon /><span className="sign-in-link">{state?.user?.name || 'Log In'}</span></Link>
        </div>

        <Link to={'/'} className="title">LEED BEAUTY</Link>

        <div className="right-side">
          <button className="loop-button" onClick={handleCancel}><LoopIcon /></button>

           <div className={`loop ${loopBtn ? 'open' : ''}`}>
            <div className="loop-first-row">
              <p>LEED BEAUTY</p>
              <input type="text" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Products" />
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

          <Link to={'/likes'} className='likes'><HeartIcon/></Link>
          <Link to={'/cart'}><CartIcon /></Link>
        </div>
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
           <li>
            <Link to='/products/'>All</Link>
          </li>
          <li>
            <Link to='/products/new'>New & Bestsellers</Link>
          </li>
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