import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useEffect } from 'react';
import Fallback from "./components/Fallback"
import { useDispatch } from "react-redux";
import { addUserInfos, resetUser } from "./store/usersSlice";
import ErrorBoundary from "./components/ErrorBoundary";

  const Home = lazy(()=>import('./pages/Home'))
  const InterfaceAdmin = lazy(()=>import('./pages/InterfaceAdmin'))
  const SignIn = lazy(()=>import('./pages/users/SignIn'))
  const MailVerify = lazy(()=>import('./pages/users/MailVerify'))
  const UserAdded = lazy(()=>import('./pages/users/UserAdded'))
  const Login = lazy(()=>import('./pages/users/Login'))
  const ForgotPassword = lazy(()=>import('./pages/users/ForgotPassword'))
  const ResetPassword = lazy(()=>import('./pages/users/ResetPassword'))
  const Myaccount = lazy(()=>import('./pages/users/MyAccount'))
  const All = lazy(()=>import('./pages/products/All'))
  const NewBesteller = lazy(()=>import('./pages/products/New-Bestellers'))
  const Face = lazy(()=>import('./pages/products/Face'))
  const Eyes = lazy(()=>import('./pages/products/Eyes'))
  const Lips = lazy(()=>import('./pages/products/Lips'))
  const Countouring = lazy(()=>import('./pages/products/Countouring'))
  const ErrorPage = lazy(()=>import('./pages/ErrorPage'))

function App() {

  const dispatch = useDispatch()
  const urlBack = import.meta.env.VITE_URL_REFRESH || 'http://localhost:3000/users/refresh-token'

 useEffect(()=>{
  const fetchToken = async()=>{
    try{
      const response = await fetch(urlBack,{
        method : 'GET',
        credentials : 'include'
      })
      if(!response.ok){
        dispatch(resetUser())
        return
      }
      const data = await response.json()
      dispatch(addUserInfos({user : data.user, accessToken : data.accessToken}))
      }
      catch(error){
        console.log(error);
      }
    }
    fetchToken()
 },[])

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Routes>
              <Route path="/" element={<Home />}/>

              {/* Admin */}
              <Route path="/interface" element={<InterfaceAdmin />}/>

              {/* Users */}
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/useradded" element={<UserAdded />}/>
              <Route path="/verify" element={<MailVerify />}/>
              <Route path="/forgot-password" element={<ForgotPassword />}/>
              <Route path="/reset-password" element={<ResetPassword />}/>
              <Route path="/me" element={<Myaccount />}/>

              {/* Products */}
              <Route path="/products/all" element={<All />}/>
              <Route path="/products/new" element={<NewBesteller />}/>
              <Route path="/products/face" element={<Face />}/>
              <Route path="/products/eyes" element={<Eyes />}/>
              <Route path="/products/lips" element={<Lips />}/>
              <Route path="/products/countouring" element={<Countouring />}/>

            </Routes>
          </ErrorBoundary>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

