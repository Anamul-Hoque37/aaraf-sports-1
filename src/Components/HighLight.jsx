import React from 'react';

const HighLight = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8">
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://via.placeholder.com/1500x800"
                    alt="Sports Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                    Elevate Your Game
                </h2>
                <p className="mt-4 text-lg md:text-xl">
                    Discover the best gear, events, and tips for athletes of every level.
                    Push your limits and achieve greatness with us!
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#"
                        className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md shadow hover:bg-indigo-700 transition"
                    >
                        Shop Now
                    </a>
                    <a
                        href="#"
                        className="px-6 py-3 border border-white text-lg font-medium rounded-md hover:bg-white hover:text-indigo-600 transition"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};


export default HighLight;