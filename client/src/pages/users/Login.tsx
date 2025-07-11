import { useState } from "react"
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { addUserInfos } from "../../store/usersSlice";
import { useNavigate } from "react-router-dom";


interface FormData {
  mailOrPhone: string;
  password: string;
}

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const url = import.meta.env.VITE_LOGIN_URL || 'http://localhost:3000/users/login'
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
      mailOrPhone : '',
      password : ''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target
      setFormData(
          (prev)=>({
              ...prev, [name] : value
          })
      )
  }

  const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      const response = await fetch(url, {
        method : "POST",
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify(formData),
        credentials : 'include'
      })
      const data = await response.json()
      if(!response.ok){
        setErrorMessage(data.message)
        return
      }
      dispatch(addUserInfos({user : data.user, accessToken : data.accessToken}))
      setTimeout(() => navigate('/'), 100)
    }
    catch(error){
      console.log(error);
      setErrorMessage('Something went wrong, try again')
    }
  }

  return (
    <>
    <Header />
      <h1 className="login-title">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" name="mailOrPhone" value={formData.mailOrPhone} onChange={handleChange} placeholder="E-mail or Phone" required/>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
          <button type="submit">Log In</button>
      </form>
      <a href="/signin" className="forgot-password-link">Don't have an account yet ?</a>
      <a href="/forgot-password" className="forgot-password-link">Forgot your password ?</a>
      {errorMessage &&(
        <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default Login