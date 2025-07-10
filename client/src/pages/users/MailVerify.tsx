import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import MailError from "./MailError"
import MailSuccess from './MailSuccess'

function MailVerify() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const token = params.get('token')
  const navigate = useNavigate()
  const url = import.meta.env.VITE_URL_VERIFY || 'http://localhost:3000/verify'

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")

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
      {status === "success" && <MailSuccess />}
      {status === "error" && <MailError />}
    </>
  )
}

export default MailVerify