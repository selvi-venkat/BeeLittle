import React from "react";
import Slider from './Slider';
import BestSellers from './BestSellers';
import SetTypes from './SetTypes';
import WhyShop from './WhyShop';

const HomeContent = () => {
    return(
        <>
            <Slider/> 
            <BestSellers/>   
            <SetTypes/>  
            <WhyShop/>
        </>
    )
}

export default HomeContent;