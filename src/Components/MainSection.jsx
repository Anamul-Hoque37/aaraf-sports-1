import React from 'react';
import Banner from './Banner';
import Product from './Product';
import SportCategory from './SportCategory';
import ContactUs from './ContactUs';
import HighLight from './HighLight';


const MainSection = () => {
    return (
        <div>
            <Banner></Banner>
            <SportCategory></SportCategory>
            <Product></Product>
            <HighLight></HighLight>
            <ContactUs></ContactUs>
        </div>
    );
};

export default MainSection;