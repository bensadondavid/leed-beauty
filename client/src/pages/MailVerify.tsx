import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"


function MailVerify() {
    
    const [params] = useSearchParams()
    const navigate = useNavigate()
    const url = import.meta.env.URL_VERIFY || 'http://localhost:3000/verify'

    useEffect(()=>{
        const token = params.get('token')
        if(!token){
            return navigate('/')
        }
        const verify = async()=>{
            try{
                const response = await fetch(url, {
                    method : 'POST', 
                    headers : {'Content-Type' : 'application/json'},
                    body : JSON.stringify({ token })
                })
                if(!response.ok){
                    navigate('/error')
                }
                navigate('/success')
            }
            catch(error){
                console.log(error);
                navigate('/')
            }
        }
        verify()
    },[])

    return(
        <p style={{ textAlign: 'center' }}>Verifying your email...</p>
    )
}

export default MailVerify