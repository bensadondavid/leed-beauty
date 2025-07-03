import { useState } from "react";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";

interface Infos{
  name : string,
  lastname : string,
  email : string, 
  password : string,
  verified_password : string,
  phone : string,
  street : string, 
  zip_code : string;
  city : string, 
}

function SignIn() {

  const navigate = useNavigate()
  const urlSignIn = import.meta.env.VITE_URL_SIGN_IN || 'http://localhost:3000/users'
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [formData, setFormdata] = useState<Infos>({
    name : '',
    lastname : '',
    email : '',
    password : '',
    verified_password : '',
    phone : '',
    street : '',
    zip_code : '',
    city : ''
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = e.target
      setFormdata((prev)=>({
        ...prev, [name] : value
      }))
    }

  const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setErrorMessage(null)
    try{
      if(formData.verified_password !== formData.password){
        setErrorMessage('Both passwords must be the same')
        return
      }
      const response = await fetch(urlSignIn, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      })
      if(!response.ok){
        const errorData = await response.json()
        setErrorMessage(errorData.message)
        return
      }
      navigate('/login')
    }
  catch(error){
    console.log(error);
    setErrorMessage('Something went wrong, try again');
  }
  }

  return (
    <>
    <Header />
        <h1 className="sign-in-title">Sign In</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Firstname" required/>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" required/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
          <input type="password" name="verified_password" value={formData.verified_password} onChange={handleChange} placeholder="Confirm your Password" required/>
          <input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>
          <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" required/>
          <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} placeholder="Zip Code" required/>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required/>
          <button type="submit">Sign In</button>
        </form>
        {errorMessage && (
        <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}
  </>
  )
}

export default SignIn