import Header from "../../components/Header"

function ResetPassword() {

  return (

    <>
    <Header />
    <form className="reset-form">
      <input type="text" name='password' value={password} onChange={handleChange} placeholder="Password" required />
    </form>
    </>
    
  )
}

export default ResetPassword