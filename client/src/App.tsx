import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Fallback from "./components/Fallback"

function App() {
 
  const Home = lazy(()=>import('./pages/Home'))
  const InterfaceAdmin = lazy(()=>import('./pages/InterfaceAdmin'))
  const SignIn = lazy(()=>import('./pages/users/SignIn'))
  const MailVerify = lazy(()=>import('./pages/users/MailVerify'))
  const MailSuccess = lazy(()=>import('./pages/users/MailSuccess'))
  const MailError = lazy(()=>import('./pages/users/MailError'))
  const UserAdded = lazy(()=>import('./pages/users/UserAdded'))
  const Login = lazy(()=>import('./pages/users/Login'))
  const ForgotPassword = lazy(()=>import('./pages/users/ForgotPassword'))
  const ResetPassword = lazy(()=>import('./pages/users/ResetPassword'))

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/verify" element={<MailVerify />}/>
            <Route path="/emailsuccess" element={<MailSuccess />}/>
            <Route path="/emailerror" element={<MailError />}/>
            <Route path="/useradded" element={<UserAdded />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/forgotpassword" element={<ForgotPassword />}/>
            <Route path="/resetpassword" element={<ResetPassword />}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

