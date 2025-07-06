import { Link } from "react-router-dom"
import Header from "../../components/Header"

function UserAdded() {

  return (
    <>
        <Header />
        <div className="user-added-page">
            <h1>Thank you for signing up !</h1>
            <p>
                We’ve just sent a confirmation link to your email address. <br />
                Please click the link to verify your account and get started.
            </p>
            <Link to="/login">Click here to Log in</Link>
        </div>
    </>
  )
}

export default UserAdded