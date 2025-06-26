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

  return (
    <header>
      <div className="header-row">

        <div className="left-side">
          <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleOpen} >
              <span className="top-bar"></span>
              <span className="bottom-bar"></span>
          </button>
          <Link to='/signin'><SigninIcon />Sign In</Link>
        </div>

        <p className="title">LEƎD BEAUTY</p>

        <div className="right-side">
          <LoopIcon />
          <Link to={'/likes'}><HeartIcon className='likes' /></Link>
          <Link to={'/cart'}><Cart4LineDuotoneIcon /></Link>
        </div>

      </div>

      <hr style={{width : "100vw"}}/>

      <nav className={isOpen ? 'open' : ''}>

        <ul>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>

      </nav>
    </header>
    
  )
}

export default Header