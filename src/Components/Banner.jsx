import React, { useRef } from 'react';
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
    const carouselRef = useRef(null);
    return (
        <div className="relative w-full h-60 bg-gray-100">
            {/* Carousel Component */}
            <Carousel
                ref={carouselRef}
                autoplay={false} // Disable autoplay (manual control with buttons)
                loop
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <img
                    src="https://i.ibb.co.com/dfSRcZG/sports-3.jpg"
                    alt="Slide 1"
                    className="h-full w-full object-cover"
                />

                {/* Slide 2 */}
                <img
                    src="https://i.ibb.co.com/KNzJg0F/sports-4.png"
                    alt="Slide 2"
                    className="h-full w-full object-cover"
                />

                {/* Slide 3 */}
                <img
                    src="https://i.ibb.co.com/dfSRcZG/sports-3.jpg"
                    alt="Slide 3"
                    className="h-full w-full object-cover"
                />

                {/* Slide 4 */}
                <img
                    src="https://i.ibb.co.com/KNzJg0F/sports-4.png"
                    alt="Slide 4"
                    className="h-full w-full object-cover"
                />
            </Carousel>

            {/* Left Arrow Button */}
            <button
                onClick={() => carouselRef.current.prev()} // Trigger the `prev` function
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
            >
                &lt;
            </button>

            {/* Right Arrow Button */}
            <button
                onClick={() => carouselRef.current.next()} // Trigger the `next` function
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
            >
                &gt;
            </button>
        </div>
    );
};


export default Banner;