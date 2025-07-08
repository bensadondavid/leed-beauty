import { useState } from "react"
import Header from "../../components/Header"

function ResetPassword() {

    const url = import.meta.env.RESET_URL || 'http://localhost:3000/users/reset'
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
        }
        catch(error){
          console.log(error);
          setErrorMessage('Something went wrong, try again')
        }
      }

  return (

    <>
    <Header />
      <h1 className="reset-title">Log In</h1>
      <form className="reset-form" onSubmit={handleSubmit}>
          <input type="text" name="mailOrPhone" value={mailOrPhone} onChange={handleChange} placeholder="E-mail or Phone" required/>
          <button type="submit">Log In</button>
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