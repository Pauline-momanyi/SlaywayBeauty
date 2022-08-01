import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
// import Nails from '../../img/hair.jpg'
// import Makeup from '../../img/makeup.jpg'
// import Hair from '../../img/nails.jpg'
import Mainbg from '../../img/mainbg.jpg'
import {FaInstagram} from 'react-icons/fa'

function Follow() {
  return (
    <div className=''>
         <img src={Mainbg} alt="" className=' bg-white border rounded w-full'/>
        <h4 className='text-center'>Follow us on Instagram <FaInstagram/></h4>
        {/* <Swiper
        spaceBetween={10}
        slidesPerView={2}
        grabCursor={true}
        className='text-center'
        >
            <SwiperSlide>
                <img src={Nails} alt="" className='object-cover h-48 w-96 rounded'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Makeup} alt="" className='object-cover h-48 w-96 rounded' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hair} alt="" className='object-cover h-48 w-96 rounded'/>
            </SwiperSlide>

        </Swiper> */}
    </div>
  )
}

export default Follow