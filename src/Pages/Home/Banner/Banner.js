import './Banner.css'
import React from 'react';
import banner2 from '../../../assets/banner/7.jpg'


const Banner = () => {
    return (
        <div>
            <div class="carousel w-full mb-5">
                <div class="carousel-item w-full">
                    <img src={banner2} class="w-full h-96 opacity-100 rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;