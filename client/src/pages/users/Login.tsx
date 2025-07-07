import { useState } from "react"
import Header from "../../components/Header";


interface FormData {
  email: string;
  password: string;
}

function Login() {

    const url = import.meta.env.LOGIN_URL || 'http://localhost:3000/users/login'
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [formData, setFormData] = useState<FormData[]>({
        email : '',
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

    const handleSubmit = async(e : React.FormEvent<FormData[]>)=>{
      e.preventDefault()
      try{
        const response = await fetch(url, {
          method : "POST",
          headers : {'Content-type' : 'application/json'},
          body : JSON.stringify(formData)
        })
        const data = await response.json()
        if(!response.ok){
          setErrorMessage(data.message)
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
    <h1 className="login-title">Log In</h1>
    <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Log In</button>
    </form>
    </>
  )
}

export default Login