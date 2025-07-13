import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


export default function Slider() {
  return (
    <div className='slider'>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop = {true}
        autoplay={{delay : 5000, disableOnInteraction : false}}
        speed={1000}
        pagination={{clickable : true}}
      >
        <SwiperSlide>
         <div className='slider-div'>
          <div className="slider-img">
            <img src="slider-1.png" loading='lazy'/>
            <img src="slider-3.png" loading='lazy'/>
          </div>
            <div className="slider-cta">
              <h1>THE CLEAR THINKER CLARIFYING SHAMPOO</h1>
              <p>Break through the buildup-clarify + boost shine with a color safe shampoo infused with salicylic acid</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-div'>
            <div className="slider-img">
              <img src="slider-3.png" loading='lazy'/>
              <img src="slider-1.png" loading='lazy'/>
            </div>
              <div className="slider-cta">
                <h1>THE CLEAR THINKER CLARIFYING SHAMPOO</h1>
                <p>Break through the buildup-clarify + boost shine with a color safe shampoo infused with salicylic acid</p>
                <button>SHOP NOW</button>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}