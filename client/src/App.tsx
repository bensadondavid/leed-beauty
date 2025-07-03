import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Fallback from "./components/Fallback"

function App() {
 
  const Home = lazy(()=>import('./pages/Home'))
  const InterfaceAdmin = lazy(()=>import('./pages/InterfaceAdmin'))
  const SignIn = lazy(()=>import('./pages/SignIn'))
  const MailVerify = lazy(()=>import('./pages/MailVerify'))
  const MailSuccess = lazy(()=>import('./pages/MailSuccess'))
  const MailError = lazy(()=>import('./pages/MailError'))

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/verify" element={<MailVerify />}/>
            <Route path="/success" element={<MailSuccess />}/>
            <Route path="/error" element={<MailError />}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

