import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Slider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop = {true}
        autoplay={{delay : 8000, disableOnInteraction : false}}
        speed={3000}
      >
        <SwiperSlide>
          <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', width: '100%', height : "50vh", cursor : 'pointer'}}>
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}