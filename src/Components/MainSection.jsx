import React from 'react';
import Banner from './Banner';
import Product from './Product';
import SportCategory from './SportCategory';
import LottieReact from './LottieReact';


const MainSection = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <SportCategory></SportCategory>
            <LottieReact></LottieReact>
            
        </div>
    );
};

export default MainSection;