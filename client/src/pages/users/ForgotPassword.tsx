import { useState } from "react"
import Header from "../../components/Header"
import { useNavigate, useLocation } from 'react-router-dom';

function ForgotPassword() {

    const navigate = useNavigate()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const success = params.get('success')

    const url = import.meta.env.RESET_URL || 'http://localhost:3000/users/forgot-password'
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [mailOrPhone, setMailOrPhone] = useState<string>('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setMailOrPhone(e.target.value)
    }

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
          const response = await fetch(url, {
            method : "POST",
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify({mailOrPhone}),
            credentials : 'include'
          })
          const data = await response.json()
          if(!response.ok){
            setErrorMessage(data.message)
            return
          }
          navigate('/forgot-password?success=true')
        }
        catch(error){
          console.log(error);
          setErrorMessage('Something went wrong, try again')
        }
      }

  return (

    <>
    <Header />
    <h1 className="forgot-title">Reset your password</h1>
    {success ?
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
        	A reset link has been sent to your email. 
      </h3>
      :(
        <>
        <form className="forgot-form" onSubmit={handleSubmit}>
            <input type="text" name="mailOrPhone" value={mailOrPhone} onChange={handleChange} placeholder="E-mail or Phone" required/>
            <button type="submit">Send an email</button>
        </form>
        {errorMessage &&(
          <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
            {errorMessage}
          </p>
        )}
        </>
      )
    }
    </>

  )
}

export default ForgotPassword