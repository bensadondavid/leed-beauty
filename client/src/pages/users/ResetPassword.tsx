import { useState } from "react"
import Header from "../../components/Header"
import { useLocation, useNavigate } from "react-router-dom"

function ResetPassword() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const token = params.get('token')
  const navigate = useNavigate()

  const url = import.meta.env.RESET_URL || 'http://localhost:3000/users/reset-password'
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePassword = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
      try{
        if(password !== confirmPassword){
          setErrorMessage('Passwords do not match')
          return
        }
        const response = await fetch(url, {
          method : "POST",
          headers : {'Content-type' : 'application/json'},
          body : JSON.stringify({token, password}),
          credentials : 'include'
        })
        const data = await response.json()
        if(!response.ok){
          setErrorMessage(data.message)
          return
        }
        navigate('/login')
      }
      catch(error){
        console.log(error);
        setErrorMessage('Something went wrong, try again')
      }
    }

  return (

    <>
      <Header />
      <h1 className="reset-title">Reset your password</h1>
      <form className="reset-form" onSubmit={handleSubmit}>
        <input type="password" name='password' value={password} onChange={handlePassword} placeholder="Password" required />
        <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirmed Password" required />
        <button type="submit">Reset password</button>
      </form>
      {errorMessage &&(
          <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
            {errorMessage}
          </p>
        )}
    </>
    
  )
}

export default ResetPassword