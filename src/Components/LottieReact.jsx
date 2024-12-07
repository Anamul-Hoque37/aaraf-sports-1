import React from 'react';
// import { Lottie } from 'lottie-react';
import animationData from '../assets/animation.json'
import Lottie from 'lottie-react';

const LottieReact = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <Lottie
            autoplay
            loop
            src={animationData}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      );
    };

export default LottieReact;