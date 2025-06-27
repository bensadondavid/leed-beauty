import { Link } from "react-router-dom"
import { SigninIcon } from "../assets/signInIcon"
import { LoopIcon } from "../assets/loopIcon"
import { HeartIcon } from "../assets/heartIcon"
import { Cart4LineDuotoneIcon } from "../assets/cartIcon"
import { useState } from "react"

function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () : void =>{
    setIsOpen(prev=> !prev)
  }

  const [loopBtn, setLoopBtn] = useState<boolean>(false)
  const handleLoopBtn = () : void =>{
    setLoopBtn(prev=>!prev)
  }

  const [search, setSearch] = useState<string>('')
  const handleSearch =(e : React.ChangeEvent<HTMLInputElement>) : void =>{
    setSearch(e.target.value)
  }

  return (
    <header>
      <div className="header-row">

        <div className="left-side">
          <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleOpen} >
              <span className="top-bar"></span>
              <span className="bottom-bar"></span>
          </button>
          <Link to='/signin'><SigninIcon /><span className="sign-in">Sign In</span></Link>
        </div>

        <p className="title">LEED BEAUTY</p>

        <div className="right-side">
          <button className="loop-button" onClick={handleLoopBtn}><LoopIcon /></button>
          {loopBtn &&
          <input type="text" name="search" className="loop-input" value={search} onChange={handleSearch} />
          }
          <Link to={'/likes'}><HeartIcon className='likes' /></Link>
          <Link to={'/cart'}><Cart4LineDuotoneIcon /></Link>
        </div>

      </div>

      <hr/>

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
    
  )
}

export default Header