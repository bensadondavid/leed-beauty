import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function MailVerify() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const token = params.get('token')
  const navigate = useNavigate()
  const url = import.meta.env.VITE_URL_VERIFY || 'http://localhost:3000/verify'

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      navigate('/')
      return
    }
    const verify = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        })
        if (!response.ok) {
          setStatus("error")
          const data = await response.json()
          setMessage(data.message)
          return
        }
        setStatus("success")
      } catch (error) {
        console.log(error)
        setStatus("error")
      }
    }
    verify()
  }, [token, url, navigate])

  return (
    <>
      {status === "loading" && <p style={{ textAlign: 'center' }}>Verifying your email...</p>}
      {status === "success" && 
      <>
        <h1>Your Email has been verified successfully</h1>
        <a href="/">Go back to home</a>
      </>
      }
      {status === "error" &&
      <>
      <h1>{message}</h1>
      </>
      }
    </>
  )
}

export default MailVerify