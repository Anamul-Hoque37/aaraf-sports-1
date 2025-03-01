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
        <div className='w-full mx-auto'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper h-[600px"
            >
                <SwiperSlide><img src="https://i.ibb.co.com/ZVQwXpN/sports3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/VMBR8cx/sports1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/74bsMX2/sports2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/ZVQwXpN/sports3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/7zFj6X7/images-4.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};


export default Banner;