import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div>
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