import Header from "../components/Header"
import Footer from "../components/Footer"
import Slider from "../components/Swiper"

function Home() {

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