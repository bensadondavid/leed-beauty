import { Link } from "react-router-dom"
import { SigninIcon } from "../assets/signInIcon"
import { LoopIcon } from "../assets/loopIcon"
import { HeartIcon } from "../assets/heartIcon"
import { Cart4LineDuotoneIcon } from "../assets/cartIcon"

function Header() {

  return (
    <header>
      <div className="header-row">
        <Link to='/signin'><SigninIcon />Sign In</Link>
        <LoopIcon />
        <Link to={'/likes'}><HeartIcon /></Link>
        <Link to={'/cart'}><Cart4LineDuotoneIcon /></Link>
      </div>
      <nav>

      </nav>
    </header>
    
  )
}

export default Header