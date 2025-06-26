import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Fallback from "./components/Fallback"

function App() {
 
  const Home = lazy(()=>import('./pages/Home'))

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

