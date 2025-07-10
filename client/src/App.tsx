import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useEffect } from 'react';
import Fallback from "./components/Fallback"
import { useDispatch, useSelector } from "react-redux";
import { addUserInfos, resetUser } from "./store/usersSlices";

function App() {
 
  const Home = lazy(()=>import('./pages/Home'))
  const InterfaceAdmin = lazy(()=>import('./pages/InterfaceAdmin'))
  const SignIn = lazy(()=>import('./pages/users/SignIn'))
  const MailVerify = lazy(()=>import('./pages/users/MailVerify'))
  const UserAdded = lazy(()=>import('./pages/users/UserAdded'))
  const Login = lazy(()=>import('./pages/users/Login'))
  const ForgotPassword = lazy(()=>import('./pages/users/ForgotPassword'))
  const ResetPassword = lazy(()=>import('./pages/users/ResetPassword'))

  const dispatch = useDispatch()
  const state = useSelector(state => state.users)
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

 useEffect(()=>{
  console.log(state)
 },[state])

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/interface" element={<InterfaceAdmin />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/verify" element={<MailVerify />}/>
            <Route path="/useradded" element={<UserAdded />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/reset-password" element={<ResetPassword />}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

