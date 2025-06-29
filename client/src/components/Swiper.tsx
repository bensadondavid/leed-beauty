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
         <div className='slider-div'>
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-div'>
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-div'>
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}