import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../App.CSS'
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div className='w-11/12 bg-white mx-auto border rounded-2xl'>
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img className='border rounded-2xl' src="https://i.ibb.co.com/7zFj6X7/images-4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='border rounded-2xl' src="https://i.ibb.co.com/JsnYBR8/images-3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='border rounded-2xl' src="https://i.ibb.co.com/7zFj6X7/images-4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='border rounded-2xl' src="https://i.ibb.co.com/WPdgS1j/images-2.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
    );
};


export default Banner;