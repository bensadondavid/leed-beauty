import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Fallback from "./components/Fallback"

function App() {
 
  const Home = lazy(()=>import('./pages/Home'))
  const InterfaceAdmin = lazy(()=>import('./pages/InterfaceAdmin'))
  const SignIn = lazy(()=>import('./pages/SignIn'))

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/signin" element={<SignIn />}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

