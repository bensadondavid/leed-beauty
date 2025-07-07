import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Swiper"
import { useEffect } from "react"
import { useSelector } from "react-redux"

function Home() {
const state = useSelector((state : any)=> state.users)
useEffect(()=>{
  console.log(state)
},[state])

  return (
    <>
        <Header />
        <div className="home">
          <Slider />
        </div>
        <Footer />
    </>
  )
}

export default Home